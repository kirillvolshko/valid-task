import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './MyInput.css'
function MyInput() {
  const [password, SetPassword] = useState('')

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'SET_PASSWORD', payload: password });
  }, [dispatch, password]);
 
  const handleChange = (e) =>{
    SetPassword(e.target.value)
  }
 
  return (
    <div>
        <input 
            name = 'password'
            type = 'password'
            placeholder='Enter password'
            className='MyInput'
            value={password}
            onChange={e=>handleChange(e)}
            />
    </div>
  )
}

export default MyInput