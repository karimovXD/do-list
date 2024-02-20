import { useState } from 'react'
import { v4 } from 'uuid'

//components
import Form from '../components/Form'
import NowModal from '../components/NowModal'
import ThenModal from '../components/ThenModal'
import Completed from '../components/Completed'

function Home() {
    const [list, setList] = useState([]);

    //addList
    const addList = (title, select) => {
        setList(addedList => [...addedList, { id: v4(), title: title, when: select, completed: false, isEditing: false }])
    }

    //deleteModal
    const deleteFunc = id => {
        setList(list.filter(item => item.id !== id))
    }

    //edit modal
    const editFunc = id => {
        setList(list.map(item => (item.id === id) ?  { ...item, isEditing: !item.isEditing } : item))
    }

    const editList = (title, when, id) => {
        setList(list.map(item => item.id === id ? { ...item, title, when, isEditing: !item.isEditing } : item))
    }

    return (
        <div
            className='w-full h-full px-10 flex flex-col items-start justify-between gap-5 lg:flex-row xxl:justify-between xxl:px-20 xxl:container xxl:m-auto'>
            <Form addList={addList} />
            <NowModal nowList={list} deleteFunc={deleteFunc} editFunc={editFunc} editList={editList} />
            <ThenModal thenList={list} deleteFunc={deleteFunc} editFunc={editFunc} editList={editList} />
            {/*<Completed completed={list}/>*/}
        </div>
    )
}

export default Home
