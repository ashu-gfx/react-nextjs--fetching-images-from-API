//rafce
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {
  const [Images, setImages] = useState([])
  const getImages = async () => {
    // console.log('Imagess')
    try {
      const response = await axios.get('https://picsum.photos/v2/list')
      const data = response.data
      setImages(data)
      console.log(Images)
      console.log(dowmload_url)
    } catch (error) {
      console.log('error')
    }
  }

  // usestatesnippets for creating variables
  // const [marks, setMarks] = useState(80)
  // const [user, setuser] = useState('ashu')
  return (
    <>
      <button
        onClick={getImages}
        className='px-5 py-3 bg-green-700 text-white font-bold'
      >
        Get Imagee
      </button>
      <div className='p-10'>
        {Images.map((elem, i) => {
          return <img 
          key={i} 
          src={elem.download_url} 
          width={300}
          height={300}
          className='m-10 rounded-lg inline-block'
          /> 
          //<h1 key={i}>{elem.author}</h1>
          // 
          // <img src='' />
        })}
      </div>
    </>

    // <div>

    // <a href='/About'>About</a>
    //  <a href='/Courses'>Courses</a>
    //  <a href=''>Pro</a>
    //  <a href=''>About</a>
    //  </div>
    // <h1>My marks were {marks}</h1>
    //  <button
    //   onClick={() => {
    //     setMarks(33)
    //     // listning to onclick listner for changing value of markes function
    //   }}
    // >
    //   Update
    // </button>
  )
}

export default page
