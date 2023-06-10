import React, { useEffect, useState } from "react";
import Sider from "./Sider";
import ReactSelect from 'react-select';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useHelper } from "./helper";
import CustomizedSection from "./CustomizedSection";
import { authors, sources } from "./dummy.data";



const PersonalizeFeed = () => {
  const { savePreferences, getMyFeed, mySourceArticles, myAuthorArticles,articleHighlights } = useHelper()
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  //call the personalize feed api
  useEffect(() => {
    const callApi = async () => {
      await getMyFeed()
    }
    callApi().catch(err => {
      console.log(err)
    })
  }, [])

  //save preferences
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(selectedSources, selectedAuthors)
    const payload = {
      sources: selectedSources.map(source => source.value),
      authors: selectedAuthors.map(author => author.value),
    }
    await savePreferences(payload)
    setSelectedSources([])
    setSelectedAuthors([])
  }


  return (
    <>
      <section className="container pt-lg-4">

        <div className="row">
          <div className="col-md-8 col-12  ">
            <form className="d-flex my-2 px-2" onSubmit={handleSubmit}>


              <button type="button" className="btn filter" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add Preferences<FilterListIcon
                  fontSize="inherit"
                />
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      {/* <h5 className="modal-title" id="staticBackdropLabel">FILTER...</h5> */}
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                      <div className="dropdown">
                        <label>Sources</label>
                        <ReactSelect
                          options={sources}
                          isMulti
                          value={selectedSources}
                          onChange={setSelectedSources}
                        />
                      </div>
                      <div className="dropdown">
                        <label>Authors</label>
                        <ReactSelect
                          options={authors}
                          isMulti
                          value={selectedAuthors}
                          onChange={setSelectedAuthors}
                        />
                      </div>

                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Done</button>

                    </div>
                  </div>
                </div>
              </div>
            </form>
            <CustomizedSection sources={mySourceArticles} author={myAuthorArticles} />
            {/* more UpdateNews */}

          </div>
          <div className="col-md-4 col-12 ">
            <Sider

            />
          </div>
        </div>
      </section>



    </>
  )
}
export default PersonalizeFeed;