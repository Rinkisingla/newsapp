import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const NewsApi = () => {
  const[news, setnews]= useState();
  const [search, setsearch] = useState("india");
   const Api_key= "def69bcdd3e04098b9d928cd39a6acf8";
     const getdata = async () => {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2025-05-08&sortBy=publishedAt&apiKey=${Api_key}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0' // mimic browser
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const jsondata = await res.json();
    setnews(jsondata.articles);
  } catch (err) {
    console.error('Fetch error:', err);
  }
};

      useEffect(()=>{
          getdata();
      },[])
       const handleinput =(e)=>{
          //console.log( e.target.value);
          setsearch(e.target.value);
         

       }
        const inputchange =(eve)=>{
          setsearch(eve.target.value);
          getdata();
        }
  return (
    <>
    <nav className='bg-sky-500  p-4 '>
        <div className='flex flex-col md:flex-row justify-between items-center align-middle gap-4 '>
        <div className='font-bold text-2xl'>
            Trendy News
        </div>
        <div>
            <ul className='flex gap-4 text-xl font-medium '>
                <li >All News </li>
                <li value="headline" onClick={ inputchange}>Top HeadLines</li>
            </ul>
        </div>
        <div className=' flex flex-col md:flex-row gap-2'>
        <input type='text' name='value' placeholder='Search News'   onChange={handleinput} value={search} className=' p-1 rounded-sm'/>
        <button  type='Submit' className='bg-blue-800 text-white p-1 ' onClick={getdata}>Search</button>
        </div>
        </div>
    </nav>
    <div>
      <div>
        <span className=' text-2xl font-bold my-4 flex justify-center '> Stay Updated With the news</span>
        <div className='flex  flex-wrap gap-4 md:justify-center px-4 py-6  '>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 hover:bg-red-600 transition-all duration-200 ' value="sport" onClick={ inputchange}>Sports</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 hover:bg-red-600 transition-all duration-200 ' value="politics" onClick={ inputchange} >Politics</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 hover:bg-red-600 transition-all duration-200 ' value="health" onClick={ inputchange}>Health</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 hover:bg-red-600 transition-all duration-200 ' value="entertainment" onClick={ inputchange}>Entertainment</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 hover:bg-red-600 transition-all duration-200 ' value="technology" onClick={ inputchange} >Technology</button>
      
        </div>
      </div>
    </div>
    <Cards news={news}/>
    </>
  )
}

export default NewsApi