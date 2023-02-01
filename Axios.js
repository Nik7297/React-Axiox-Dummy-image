import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Axios.css'

function Axios() {

    const[statvar,useproduct] = useState([])

    useEffect(()=>{
        axios.get('http://dummyjson.com/products/')
        .then((resolve)=>{
           useproduct(resolve.data.products)
        console.log(resolve.data.products)
        
            

        })
       
    },[])

    return(
        <>
        <div>{
        statvar.map((datas)=>{
           return( 
           <div>
            <div><img src={datas.thumbnail}></img></div>
            <h3>Title : {datas.title}</h3>
            <h6>price : {datas.price}</h6>

            </div>
        )

        })
    }
        </div>
        
        </>
    )
    

    
}
export default Axios

