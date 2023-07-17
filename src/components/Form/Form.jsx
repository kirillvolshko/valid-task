import React from 'react'
import './Form.css'
import MyInput from '../UI/MyInput'
import ValSect from '../ValidationSections/ValSect'
function Form() {
  return (
    <div className='container'>
        <div className='text-container'>
            <p className='text-content'>Password Check Task</p>
        </div>
        <form className='form'>
            <MyInput/>
            <ValSect/>
        </form>
    </div>
  )
}

export default Form