import React from 'react'

const Cards = ({news}) => {
      console.log(news);
  return (
    <>
     <div className="grid sm:grid-cols-3 grid-cols-1  gap-6 px-4 py-8  ">
       {Array.isArray(news) && news.map((currentnews, index) => {
           
                 if(!currentnews.urlToImage)
                    { return null;}
                 else{
                    return(
                        <div key={index} className='border-slate-900  flex flex-col justify-between  border rounded-xl overflow-hidden p-4' >
                     <img  src={currentnews.urlToImage} alt="Image" className='w-full h-48 object-cover rounded-md'/>
                        <h1 className=' font-medium text-xl'>{currentnews.author}</h1>
                        <p className="text-sm p-2 mr-4">{currentnews.description}</p>
                        <button className='bg-blue-600 text-white p-1' onClick={()=>window.open(currentnews.url)}>ReadMore</button>
                    </div>
                    );
                 }
                

    

        })}
     </div>
    </>
  )
}

export default Cards