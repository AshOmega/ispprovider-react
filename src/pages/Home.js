import React, {useState} from 'react'
import Providers from './Providers'


export default function Home() {

    const [searchTerm, setSearchTerm] = useState("")
    const [total, setTotal] = useState(0)
    const [apiHits, setApiHits] = useState(0)

    function handleSetTotal(total){
        setTotal(total)
    }

    function handleSetApiHits(increment){
        setApiHits(apiHits + 1)
    }

    return (
        <>
           {/* Header section */}
            <div className="p-6 flex bg-gray-50">
                <div className="px-4">
                    <img src="" alt="Icon" />
                </div>
                <div className="font-serif">
                    <span className="font-normal text-xl text-green-500">
                    ISP Provider
                    </span>

                    <span className="px-2 font-thin text-green-400">
                    - find your preferred vendor
                    </span>
                    
                </div>
                <div className="float-right px-3 border-2 border-green-600 rounded-lg">
                    <div className="px-2">
                        Total : {total}
                    </div>
                    <div className="px-2">
                        API : {apiHits}
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="grid row-auto grid-cols-5 bg-gray-100 border-2">
                
                <div className="col-span-5 border-b-2 border-black">
                    {/* Search area */}
                    <div className="flex p-6 border-t-2 border-b-2 border-black">
                        <div>
                            <img className="px-1" src="" alt="Icon" />
                        </div>
                        <div className="px-3">
                        Home
                        </div>
                        <div className="flex flex-grow border-8">
                            <input onChange={e => setSearchTerm(e.target.value)} className="flex flex-grow rounded-lg px-3" type="text" placeholder="Search by provider" value={searchTerm} />
                        </div>
                    </div>

                    <div className="border-2">
                        <Providers searchTerm={searchTerm} handleSetTotal={handleSetTotal} handleSetApiHits={handleSetApiHits}/>
                    </div>
                </div>
            </div>

        </>
    )
}