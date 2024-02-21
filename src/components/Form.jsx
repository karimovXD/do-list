import { useState, useEffect } from 'react'
import Select from 'react-select'

//component
function Form({ addList }) {
  const [textValue, setTextValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  //filterOptions
  const options = [
    { value: 'now', label: 'now' },
    { value: 'then', label: 'then' },
  ];

  const handleSubmit = e => {
    e.preventDefault();

    addList(textValue, filterValue)
    setTextValue('')
  }

  return (
    <>
      <form action="" className='w-full lg:w-1/3 h-full py-5' onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          value={textValue}
          placeholder='write your plan'
          className='w-full h-52 border mb-5 p-2 shadow-lg'
          onChange={e => { setTextValue(e.target.value) }}>
        </textarea>
        <Select
          className="w-full rounded mb-7 shadow-lg"
          id='select'
          options={options}
          placeholder="Do your plan"
          onChange={e => setFilterValue(e.value)}
        />
        <button type='submit' className='border-2 w-full h-10 hover:border-blue-600 shadow-lg'>ADD</button>
      </form>
    </>
  )
}

export default Form