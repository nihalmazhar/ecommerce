import React, {useState, useEffect} from 'react'
import axios from 'axios'
function CustomerSupport() {

    const [message, setMessage] = useState([])

    const fetchMessage = async() => {
        const response = await axios.get("http://localhost:4000/api/contactus")
        setMessage(response.data)
    }

    useEffect(() => {fetchMessage()}, [])
    console.log(message)
  return (<>
    <div className=" m-4 text-2xl font-semibold">Customer Support</div>
    {message && message.map((mail) => 
    <div key={mail._id} className='border-2 border-gray-400 rounded-md m-4 p-2'>
        <div><span className='text-gray-600 mr-2'>E:Mail:</span>{mail.email}</div>
        <div><span className='text-gray-600 mr-2'>Subject:</span> {mail.subject}</div>
        <div><span className='text-gray-600 mr-2'>Message:</span> {mail.message}</div>
    </div>)}
    </>
  )
}

export default CustomerSupport