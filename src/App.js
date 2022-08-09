import React from 'react'
import './app.scss'
import { Form } from 'react-bootstrap'
import * as aiIcon from 'react-icons/ai'

const App = () => {
  return (
    <>
      <div className="app_box sunny p-5">
        {/* searchbox */}

        <div className='search_box'>
          <Form.Group className="mb-3 d-flex align-items-center border-bottom ps-3 pe-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" className='input_field text-white shadow-none' placeholder="Search Anywhere..." />

            <aiIcon.AiOutlineSearch className='fs-2 text-white' />
          </Form.Group>
        </div>

        {/* main contents */}

          <div className='mt-5 d-flex justify-content-center align-items-center'>
            <h1 className='text-white text-center'>
              Country, CD
            </h1>


          </div>
      </div>
    </>
  )
}

export default App