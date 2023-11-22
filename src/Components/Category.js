import React from 'react'

const Category = ({ buttons , filter }) => {

    const startFilter = (cat) => {
        filter(cat)
    }

    return (
        <div>
            <div className='flex flex-wrap justify-center mt-2 mb-5'>
                {
                    buttons.length ? buttons.map((button , index) => {
                        return(
                            <button onClick={() => {startFilter(button)}} key={index} className=' border-2 border-[#b79883] py-1 px-2 mx-1 mt-2 rounded-md font-bold hover:bg-[#b79883] hover:text-[#F8F8F8] transition'>{button}</button>
                        )
                    }) : <h3 className='text-2xl font-bold text-center'> لا يوجد اصناف </h3>
                }
            </div>
        </div>
    )
}

export default Category