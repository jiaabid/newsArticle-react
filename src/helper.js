import { useState } from "react"
import { axiosInstance } from "./config/axios.config"

export const useHelper = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [articles, setArticles] = useState([])
    const [test, setTest] = useState({})
    const [articleHighlights, setArticlesHighlights] = useState([])
    const [mySourceArticles, setMySourceArticles] = useState([])
    const [myAuthorArticles, setMyAuthorArticles] = useState([])
    const [author, setAuthor] = useState("")
    const [source, setSource] = useState("")
    //register user
    const registerUser = async (registerPayload) => {
        initiateLoader(true)
        let response = await axiosInstance.post("register", registerPayload)
        if (response.status == 200 || response.status == 201) {
            console.log(response)
            initiateLoader(false)
            alert(response.data.message)

        }
    }

    //login user
    const login = async (payload) => {
        initiateLoader(true)
        let response = await axiosInstance.post("login", payload)
        if (response.status == 200 || response.status == 201) {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            initiateLoader(false)
            alert(response.data.message)
        }
    }

    //get articles
    const getArticles = async (payload) => {
        // console.log(`Bearer ${localStorage.getItem("token")}`)
        initiateLoader(true)
        let query = ""
        // console.log(payload.length)
        if (payload) {
            Object.keys(payload).forEach(key => {
                if (query.length == 0) {
                    return query = query + `${key}=${payload[key]}`
                }
                query = query + `&${key}=${payload[key]}`

            })
        }
        let endpoint = query.length == 0 ? "article?q=technology" : `article?${query}`
        console.log(endpoint)
        let response = await axiosInstance.get(endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (response.status == 200 || response.status == 201) {
            console.log(response)
            setArticles(response.data.data.articles) //save all the articles
            let sliced = response.data.data.articles.slice(0, 20)
            setArticlesHighlights(sliced) //save first 20 articles for feed
            console.log(response.data.data.articles[0], 'in api')
            setTest(response.data.data.articles[0])
            console.log(test)
            initiateLoader(false)
            // alert(response.data.message)
        }
    }

    //handle the loader
    const initiateLoader = (bool) => {
        setIsLoading(bool)
        setIsDisabled(bool)
    }

    //search the articles
    const handleSearch = async (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        console.log(searchValue)
        await getArticles({ q: searchValue })
    }

    //filter the articles 
    const handleFilter = async (e) => {
        console.log("in filter",source,author)
        e.preventDefault()
        await getArticles({ sources: source, q:"books" })
    }


    //save the user preferences
    const savePreferences = async (payload) => {
        initiateLoader(true)
        let response = await axiosInstance.post("preferences", payload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (response.status == 200 || response.status == 201) {
            initiateLoader(false)
            alert(response.data.message)
        }
    }

    //get the my customized feed
    const getMyFeed = async (payload) => {
        initiateLoader(true)
        let response = await axiosInstance.get("personalFeed", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (response.status == 200 || response.status == 201) {
            setMySourceArticles(response.data.sources)
            setMyAuthorArticles(response.data.author)
            initiateLoader(false)
            // alert(response.data.message)
        }else{
            alert("error in fetching data!")
        }
    }

    return {
        isLoading,
        isDisabled,
        articles,
        articleHighlights,
        searchValue,
        test,
        author,
        source,
        mySourceArticles,
        myAuthorArticles,
        setAuthor,
        setSource,
        setSearchValue,
        registerUser,
        login,
        getArticles,
        handleSearch,
        savePreferences,
        getMyFeed,
        handleFilter
    }
}