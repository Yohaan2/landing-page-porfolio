'use client'
import React, { useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Clipboard } from 'lucide-react';

const status = {
  INIT: 'INIT',
  SENDING: 'SENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

const FormContact = () => {
  const [data, setData] = useState({
    email: '',
    message: ''
  })
  const [progress, setProgress] = useState(status.INIT)

  const handleSubmit = async (e: Record<string, any>) => {
    e.preventDefault()
    setProgress(status.SENDING)
    const template = {
      service_id: 'service_nebf02h',
      template_id: 'template_779jmhk',
      user_id: 'ZevjXwpmtulbj8A_W',
      template_params: {
          'from_name': data.email,
          'to_name': 'Yohan',
          'email': data.email,
          'message': data.message,
      }
    }
    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', template)
      
      if(response.status === 200) {
        setProgress(status.SUCCESS)
        toast.success('Thanks for your time!')
      }
      
    } catch (error) {
      toast.error((error as Error).message)
    }

  }
  const handleChange = (e: Record<string, any>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    if(data.email && data.message){
      setProgress(status.ERROR)
    }
  }

  return (
    <>
    <div className='flex justify-center'>
      <Toaster />
      <form className='w-[400px] p-4 border border-teal-50 rounded-xl' onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" value={data.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="name@example.com" name='email' onChange={handleChange} required />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Message</label>
          <textarea name="message" value={data.message} cols={10} rows={5}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={`text-white bg-blue-700  ${progress === status.INIT || progress === status.SENDING ? '': 'hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`} disabled={ progress === status.INIT || progress === status.SENDING }>{progress === status.SENDING ? 'Sending...' : 'Submit'}</button>

        <p className='text-center  font-bold mt-5'>O puedes contactar conmigo en {' '}
          <CopyToClipboard text="garciayohan57@gmail.com" onCopy={() => toast.success('Copied to clipboard')}>
            <span className='text-secondary cursor-pointer'>
              garciayohan57@gmail.com
              <Clipboard className='inline-block ml-1 text-secondary' />
            </span>
          </CopyToClipboard>
        </p>
      </form>
      </div>
      </>
  )
}

export default FormContact
