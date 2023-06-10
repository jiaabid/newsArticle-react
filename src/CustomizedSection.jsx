import React, { useEffect } from "react";
import { authors } from "./dummy.data";
;
import { useHelper } from "./helper";

const CustomizedSection = ({ sources, author }) => {
console.log(sources,author)
    return (
        <>
               {/*about live*/}
              
               <p className="persHeading">Sources</p>
               <div className="moreUpdate">          
                   {sources?.slice(0,8).map((data) => {
                       return (
                           <div class="card moreNewsCard" style={{ width: "11rem" }}>
                               <img src={data.urlToImage} class="card-img-top" alt="..." />
                               <div class="card-body">
                                   <h3>{data.source.name}</h3>
                                   <h5 class="card-text">{data.title}</h5>
                               </div>
                           </div>)
                   })}
               </div>
            
            {/* more UpdateNews */}
            <p className="persHeading">Authors</p>

            <div className="moreUpdate">
                {author?.slice(0,8).map((data) => {
                    return (
                        <div class="card moreNewsCard" style={{ width: "11rem" }}>
                            <img src={data.urlToImage} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3>{data.source.name}</h3>
                                <h5 class="card-text">{data.title}</h5>
                            </div>
                        </div>)
                })}
            </div>
     
            
            <div className="sponsorSection">
                <div className="row  ">
                    <div className="col-md-6 col-12 sponsorImg">

                        <img srcset="https://www.newshub.co.nz/home/money/2023/05/how-to-get-into-the-property-market-in-2023/_jcr_content/par/image.dynimg.full.q75.jpg/v1685066742225/GettyImages-1176854253.jpg" alt="How to get into the property market in 2023" itemprop="image"></img>
                    </div>
                    <div className="col-md-6 col-12 sponsorContent">
                        <p>Sponsored</p>
                        <h1>
                            Is now a good time to buy? Green shoots in the property market indicate possible turning point  </h1>
                        <p>There's a window of opportunity in the property market - here's what you need to know.
                        </p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomizedSection;