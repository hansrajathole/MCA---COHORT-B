import React, { useEffect, useState } from 'react'
import axios from "axios"
const Home = () => {
 
    const [productData, setproductData] = useState([])
    
     useEffect(() => {
       getData()
     }, [])
     


    function getData() {
        axios.get("http://localhost:4000/")
        .then((res)=>{
            console.log(res.data.products);
            setproductData(res.data.products)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }


  return (
    <div className='container'>
        {
            productData.map((item , index)=>{
                return <div className='product'>
                    <div className="top">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="bottom">

                    </div>
                </div>

            })
        }
    </div>
  )
}

export default Home
