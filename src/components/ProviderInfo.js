import React from 'react'

export default function ProviderInfo({provider}) {
    return (
       <>
       <div className="grid grid-cols-6 my-3">
            <div className="px-3 col-span-2">
                <img src="" alt="Provider"/>
            </div>
            
            <div className="col-span-4 border-2 rounded-md border-black">
                <div className="grid grid-rows-4 space-y-3">
                    <div className="m-2">
                        Max.Speed : {provider.max_speed}  
                    </div>
                    <div className="m-2">
                        Phone : {provider.contact_number}  
                    </div>
                    <div className="m-2">
                        Email : {provider.email}  
                    </div>
                    <div className="m-2">
                        Min Plan : {provider.lowest_price}  /-
                    </div>
                </div>
               
            </div>

            
       </div>
       <div className="px-3">
            Rating: {provider.rating}  
       </div>

       <div className="m-1 p-3 border-2 border-gray-400 rounded-lg">
            {provider.description} Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` in the alt prop
       </div>    

       <div className="flex m-4 justify-around">
           <button className="px-2 button border-2 border-green-500 rounded-md text-green-600">Link</button>
           <button className="px-2 button border-2 border-green-500 rounded-md text-green-600">Share</button>
           <button className="px-2 button border-2 border-green-500 rounded-md text-green-600">Download</button>
       </div>
       
       </>
    )
}
