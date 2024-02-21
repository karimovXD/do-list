import { useState } from 'react'
import Select from 'react-select'


function EditModal({ editList, task }) {

  const [textValue, setTextValue] = useState(task.title);
  const [filterValue, setFilterValue] = useState(task.when);
  console.log(filterValue);
  //filterOptions
  const options = [
    { value: 'now', label: 'now' },
    { value: 'then', label: 'then' },
  ];

  const handleSubmit = e => {
    e.preventDefault();

    editList(textValue, filterValue, task.id)
    setTextValue('')
  }

  return (
    <form action="" className='text-center w-full h-auto py-1 px-1 lg:text-left border-2 shadow-lg rounded-md' onSubmit={handleSubmit}>

      <textarea
        name=""
        id=""
        value={textValue}
        placeholder='Edit your plan'
        className='w-full border p-2 rounded-md'
        onChange={e => { setTextValue(e.target.value) }
        }>
      </textarea >
      <Select
        className="w-full rounded mb-5"
        id='select'
        options={options}
        placeholder="Do your plan"
        value={filterValue}
        onChange={e => setFilterValue(e.value)}
      />
      <button className='w-full py-1 border border-yellow-400 hover:border-yellow-600'>change</button>
    </form>
  )
}

export default EditModal