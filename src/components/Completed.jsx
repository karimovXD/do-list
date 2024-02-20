import React from 'react'

function Completed({ completed }) {
    return (
        <div className='text-center w-full lg:w-1/5 h-auto py-5 px-1 lg:text-left'>
            <h1 className='border text-center text-xl mb-2'>Completed</h1>
            {
                completed.map((item, i) => {
                    if (item.completed === 'false' || item.title.trim() === '' || item.when === '') {
                    } else {
                        return (
                            <div key={i} id={item.id}>
                                <div className='p-2 mb-2 border'>
                                </div>
                                <ul className='flex items-center justify-center'>
                                    <li>
                                        <button className='py-1 px-2 border border-red text-red hover:text-purple-950 hover:border-purple-950'>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Completed