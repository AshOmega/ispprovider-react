import React from 'react'

export default function ProviderListing({provider, updateProviderInfo}) {
    return (
        <div className="grid grid-cols-3">
        <button onClick={() => {updateProviderInfo(provider.id)}} className="col-span-3 bg-green-50 border-2 border-green-500 p-1 my-3 mx-2">
                <span className="px-2 ">
                    {provider.name}
                </span>

                <span className="px-2 float-right">
                    Rs. {provider.lowest_price} {'>>'}
                </span>
        </button>
        </div>
        
    )
}
