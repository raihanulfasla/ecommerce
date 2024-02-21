import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { errorToast } from '../Toast';

const Detail = () => {

const {itemId}=useParams();
// console.log(obj);
const [item,setItem]=useState([]);


// useEffect(()=>{
//   console.log("details")

// axios.get(`http://localhost:3000/api/products/${item}`)
// .then((response)=>{
//   // alert(JSON.stringify(response.data))
//   console.log(response.data.item);





    // const items=response.data.find((productItem) => productItem._id===parseInt(itemId));
    // setItem(items);
// },[itemId])


useEffect(()=>{
  fetchdata()
},[itemId])

const fetchdata = async()=>{
  console.log('dddd',itemId);
  try {
    const response =  await axios.get(`http://localhost:3000/api/products/${itemId}`)
    setItem(response.data.products)
  } catch (error) {
    errorToast(error.message)
  }
}

  return (
    <>

     <div className=''>
{/*     
     <img src=
     {item.productPic}
      /> */}
<img 
src={`http://localhost:3000/api/images/uploads/${item?.productPic}`} 
/>
     </div>

    <div className="">
      {item.name}
    </div>

    <div className="">
    {item.price}
    </div>

    <div className="">
      {item.description}
    </div>

  </>

  )
    };


export default Detail