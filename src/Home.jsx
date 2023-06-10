import React, { useEffect } from "react";
import Sider from "./Sider";
import Section from "./Section";
import { useHelper } from "./helper";

const Home = () => {
  const { getArticles, articleHighlights, author, setAuthor, source, setSource, handleSearch, searchValue, setSearchValue,handleFilter } = useHelper()



  useEffect(() => {
    const callApi = async () => {
      await getArticles()
    }
    callApi().catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <section className="container ">

        <div className="row">
          <div className="col-md-8 col-12  ">
            <form className="d-flex my-2 px-2" onSubmit={handleSearch}>
              <input className="form-control me-2" value={searchValue} type="search" placeholder="Search..." aria-label="Search" onChange={(e) => setSearchValue(e.target.value)} />
              <button type="submit" class="btn ">Search</button>
              <button type="button" class="btn filter" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                filter
              </button>
            </form>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    {/* <h5 class="modal-title" id="staticBackdropLabel">FILTER...</h5> */}
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleFilter}>
                      
                      <div class="mb-2">
                        <label for="exampleInputEmail1" class="form-label">SOURCE</label>
                        <input type="text" class="form-control" value={source} onChange={(e) => setSource(e.target.value)} name="source" />
                        <small>You can give many comma seperated sources (e.g: s1,s2)</small>
                      </div>

                      <div class="modal-footer">
                        <button type="submit" class="btn btn-success" 
                        data-bs-dismiss="modal"
                        >Done</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>

            <Section articleHighlights={articleHighlights} />
          </div>
          <div className="col-md-4 col-12">
            <Sider
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Home;