import React from 'react'
import EditModal from "./EditModal"


function ThenModal({ thenList, deleteFunc, editFunc, editList }) {
    return (
        <div className='text-center w-full lg:w-1/5 h-auto py-5 px-1 lg:text-left'>
            <h1 className='border text-center text-xl mb-2'>Then</h1>
            {
                thenList.map((item, i) => {
                    if (item.when === 'now' || item.title.trim() === '' || item.when === '') {
                    } else {
                        return (
                            item.isEditing ? (
                                <EditModal editList={editList} task={item} key={i} />
                            ) : (
                                <div key={i} className='w-auto h-auto mb-4 border-2 border-wite p-2 shadow-lg rounded-md'>
                                    <div className='mb-3 border-b-2 border-light pb-3'>
                                        <p>{item.title}</p>
                                    </div>
                                    <ul className='flex items-center justify-between'>
                                        <li>
                                            <button
                                                className='py-1 px-2 border text-green-400 border-green-400 hover:text-green-600 hover:border-green-600'
                                                onClick={() => item.completed = true}
                                            >
                                                <i className="fa-solid fa-check"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className='py-1 px-2 border border-yellow-400 text-yellow-400 hover:text-yellow-600 hover:border-yellow-600'
                                                onClick={() => editFunc(item.id)}
                                            >
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className='py-1 px-2 border border-red text-red hover:text-purple-950 hover:border-purple-950'
                                                onClick={() => deleteFunc(item.id)}>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        )
                    }
                })
            }
        </div>
    )
}

export default ThenModal