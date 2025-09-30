import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {

    const params = useParams()
    const productId = params.productId

    console.log(productId);
    useEffect(() => {
     
     getProductDetail(productId)
    }, [])
    

    const getProductDetail =(productId)=>{
        axios.get("http://localhost:4000/")
    }
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default ProductDetail
