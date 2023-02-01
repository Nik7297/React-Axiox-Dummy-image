import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Dummy.css'

function Axios() {

    const[statvar,useproduct] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((resolve)=>{
            console.log(resolve)
           useproduct(resolve.data)
        
        
            

        })
       
    },[])

    return(
        <>
        <h1>Ecommerce</h1>
        <div className='box'>
        
        {
            
        statvar.map((datas,index)=>{
            if(index <9){
           return( 
           <div className='boxes'>
            
            <div className='imgbox'><img src={datas.thumbnailUrl}></img></div>
            <h5>{datas.title}</h5>
            

            </div>
        )
    }

        })
    }
        </div>
        
        </>
    )
    

    
}
export default Axios