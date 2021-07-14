import React, {useState, useEffect} from 'react'
import ProviderListing from './ProviderListing'
import ProviderInfo from '../components/ProviderInfo'

const providers = [
    {
        id : 1,
        name : "bsnl",
        lowest_price : 110,
        rating : 1,
        max_speed : "100 mbps",
        description : "bsnl provider",
        contact_number : "1234567890",
        email : "bsnl@bsnl.com",
        image : "",
        url : "http://bsnl.com"
    },
    {
        id : 2,
        name : "airtel",
        lowest_price : 450,
        rating : 3,
        max_speed : "100 mbps",
        description : "airtel provider",
        contact_number : "2345678901",
        email : "airtel@airtel.com",
        image : "",
        url : "http://airtel.com"
    },
    {
        id : 3,
        name : "hathway",
        lowest_price : 600,
        rating : 5,
        max_speed : "100 mbps",
        description : "hathway provider",
        contact_number : "3456789012",
        email : "hathway@hathway.com",
        image : "",
        url : "http://hathway.com"
    },
    {
        id : 4,
        name : "ACT",
        lowest_price : 600,
        rating : 5,
        max_speed : "100 mbps",
        description : "ACT provider",
        contact_number : "4567890123",
        email : "ACT@ACT.com",
        image : "",
        url : "http://ACT.com"
    },
    {
        id : 5,
        name : "you",
        lowest_price : 700,
        rating : 4,
        max_speed : "100 mbps",
        description : "you provider",
        contact_number : "5678901234",
        email : "you@you.com",
        image : "",
        url : "http://you.com"
    },
    {
        id : 6,
        name : "reliance",
        lowest_price : 900,
        rating : 2,
        max_speed : "100 mbps",
        description : "reliance provider",
        contact_number : "6789012345",
        email : "reliance@reliance.com",
        image : "",
        url : "http://reliance.com"
    }
]


export default function Providers({searchTerm, handleSetTotal, handleSetApiHits}) {
    
    const currentProvider = providers[0]
    const [providerInfo, setProviderInfo] = useState(currentProvider)
    const [providerList, setProviderList] = useState(providers)

    const searchFiltered = providers.find(provider => provider.name.includes(searchTerm))

    useEffect(() => {
          if(searchFiltered !== undefined){
            setProviderInfo(searchFiltered)
        }   
    }, [searchFiltered])

    useEffect(() => {
        handleSetTotal(providerList.length)
    }, [providerList])


    useEffect(() => {
        handleSetApiHits(1)
    }, [providerInfo])

    function updateProviderInfo(providerId){
        const providerInfoFiltered = providers.find(provider => provider.id === providerId);
        setProviderInfo(providerInfoFiltered)
    }

    function handlePriceFilterClick(e){
        const sortedProviders = providers.sort((a,b) => (a.lowest_price < b.lowest_price) ? 1 : -1)
        setProviderList(sortedProviders)
        setProviderInfo(sortedProviders[0])
    }

    function handleRatingFilterClick(e){
        const sortedProviders = providers.sort((a,b) => (a.rating < b.rating) ? 1 : -1)
        setProviderList(sortedProviders)
        setProviderInfo(sortedProviders[0])
    }
    
    return (
        <div className="grid grid-rows-auto grid-cols-6 h-screen">
           <div className="col-span-3 border-r-2 border-black">
               <div>
                {
                    providerList.map((entry) => {
                    return <ProviderListing key={entry.id} provider={entry} 
                    updateProviderInfo={updateProviderInfo}/>
                    })
                }
                </div>

                <div className="p-3">
                    <span className="border-2 p-1 m-2">
                            Sort by
                    </span>

                    <span className="border-2 p-1 m-2">
                        <input onClick={handlePriceFilterClick} className="m-1" type="radio" name="sort" value="Price"/>
                        <span className="mx-1">Price</span>
                        <input onClick={handleRatingFilterClick} className="m-1" type="radio" name="sort" value="Rating"/>
                        <span>Rating</span>
                    </span>
                </div>
            </div>
            

            <div className="col-span-3">
            {
                renderInfo(providerInfo)
            }
            </div> 
        </div>
    )
}

function renderInfo(providerInfo){
    return <ProviderInfo provider = {providerInfo}/>
}
