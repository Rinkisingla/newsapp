import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const NewsApi = () => {
  const[news, setnews]= useState();
  const [search, setsearch] = useState("india");
   const url = 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE&limit=500&country=US&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a3122bef17mshdec0386a7efba10p1499dfjsnaf0bb0c56f32',
      'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
    }
  };

  const getdata = async () => {
      const response = await fetch(`https://real-time-news-data.p.rapidapi.com/search?query=${search}&limit=10&time_published=anytime&country=US&lang=en`, options);
      const jsonData = await response.json(); 
      console.log(jsonData.data);

      // Adjust based on API structure
      setnews(jsonData.data );
     
  };

  useEffect(() => {
    getdata();
  }, []);
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
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 ' value="sport" onClick={ inputchange}>Sports</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 ' value="politics" onClick={ inputchange} >Politics</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 ' value="health" onClick={ inputchange}>Health</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 ' value="entertainment" onClick={ inputchange}>Entertainment</button>
            <button className='bg-red-400 rounded-xl md:px-8 my-5 px-6 py-2 ' value="technology" onClick={ inputchange} >Technology</button>
      
        </div>
      </div>
    </div>
    <Cards news={news}/>
    </>
  )
}

export default NewsApi