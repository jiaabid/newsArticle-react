import React from "react";
import { useHelper } from "./helper";
import NewsData from "./NewsData";

const Sider=()=>{
   

    return(
    <>
       <div className="siderWrap">
        <h1>Latest News</h1>
        <div className="latestNewsWrap">
        {NewsData.map((data,index)=>{
            return(
                <>
                <div className="latestNews" key={index} >
                <h2>{data.title}</h2>
                <span>{data.time}</span>
            </div>
                </>
            )
        })}
            
        </div>
       </div>
    </>
    )
}
export default Sider;