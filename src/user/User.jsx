import { useEffect, useState } from "react"
import axios from "axios"
import { errorToast } from "../components/Toast"
import { Link, useParams } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";

function User() {

  const [products,setProducts] = useState([])
  //const [searchPharams,setsearchParams]=useParams()


  const fetchAllProducts = async()=>{
    try {
      const response =  await axios.get(`http://localhost:3000/api/products`)
      setProducts(response.data.products)
    } catch (error) {
      return errorToast(error.message || 'try again')
    }   
  }

  useEffect(()=>{
    fetchAllProducts()
  },[])

    return (
      <div>
        <h1 className="text-white">User</h1>
        

        <div className="min-h-[90vh] h-auto flex flex-wrap justify-center items-center w-[90%] m-auto bg-slate-700">
          {products.map((item)=>{
            return(
              <>
              <div key={item._id} className="px-10 py-8">
                <p>
        <Link to={`/Detail/${item._id}`}> <img className="w-[200px] h-[100px] rounded-lg object-contain" src={`http://localhost:3000/api/images/uploads/${item?.productPic}`} alt="" /></Link>
                </p>

              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              {/* <button>ADD TO CART</button> */}
          </div>
           {/* <button className="h-[50px] w-[200] bg-info rounded-md "></button> */}
           <CiShoppingCart />

          </>
            )
          })
          }
        </div>

      </div>
      
    )
  }
  
  export default User