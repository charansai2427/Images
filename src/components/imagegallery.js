import {createClient} from "pexels";
import { useState,useEffect } from "react";
import "../styles/imagegallery.css"
import { createSelector,createAsyncThunk } from "@reduxjs/toolkit";

export default function Client ( { query}){
const client = createClient(' DnS6kIU35UjI6H608t9wBb6HN8ro2GFvK9msrGG0RoP97FdYHE07x4wC');
const [data,setData]= useState({photos:[]})
const [check,setcheck ] = useState("")
const [page,setPage] = useState(1);

// const query = "Beach";

useEffect(()=>{
    client.photos.search({ query,per_page:200,page}).then(res =>{
        console.log(res);
        setData({photos:[...res.photos]});
    })
},[page,query])

const [show,setShow] = useState();
return(
   <div>
        <div>
            {
                data && data.photos.map((e)=>{
                    return(
                        <img className="images" onClick={() => {setcheck(e.src);setShow(true)}} src={e.src.medium} style={{ objectFit: "cover" ,width:"600px",marginTop:"5em", margin:'1em'}}/>
                    )
                })
            }
        </div>
        </div>
)
}
