import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Product from '../components/Product';


const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [items,setItems] = useState([]);
    const [tid,setTid] = useState(false);

    async function fetchApiData(){
        try{
            setTid(true);
            const tid = toast.loading("Loading...");
            const data = await fetch(API_URL);
            const response = await data.json();
            toast.success("Data Fetched SuccessFully");
            console.log(response);
            toast.dismiss(tid);
            setTid(false);
            setItems(response);
            console.log("items is: ",items); 
        } catch(error){
            toast.error("Error occured during api call");
            console.log(error);
            setItems([]);
        }
    }

    useEffect(
        ()=>{
            fetchApiData();
        },[]
    );

  return (
    <div className='w-[70%] mx-auto'>
        {
            tid ? <div className='flex justify-center items-center text-3xl text-black'>Loading</div> : items.length > 0 ? 
            (<div className='flex flex-wrap justify-center gap-6 p-5'>
                {
                    items.map((item)=>(
                        <Product key={item.id} item={item} />
                    ))
                }
            </div>) :
            (<div>No Items found</div>)
        }
    </div>
  )
}

export default Home;
