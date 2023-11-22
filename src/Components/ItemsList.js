import React from 'react'
import Zoom from 'react-reveal/Zoom';


const ItemsList = ({data}) => {
    return (
        <div className=' container mx-auto px-3'>
            <div>
                {
                    data.length ? data.map((item , index) => {
                        return(
                            <Zoom>
                                <div key={index} className='flex flex-wrap mb-8 border-[2px] bg-[#F8F8F8] rounded-lg'>
                                    <div className="h-[200px] w-full sm:w-[200px] bg-cover bg-center bg-red-500 rounded-md" style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                                    <div className='w-full sm:w-[calc(100%-200px)] p-3'>
                                        <div className=' flex justify-between mb-3 font-bold'>
                                            <h3 className=''>{item.title}</h3>
                                            <span className=' text-[#b79883]'>{item.price}</span>
                                        </div>
                                        <p className=' text-[#797979]'>{item.description}</p>
                                    </div>
                                </div>
                            </Zoom>
                        )
                    }) : <h3 className=' text-2xl font-bold text-center py-10'>لا يوجد وجبات</h3>
                }
            </div>
        </div>
    )
}

export default ItemsList