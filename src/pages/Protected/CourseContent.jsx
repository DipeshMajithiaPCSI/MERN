import React, { useState } from 'react'
import Section1 from './CourseContent/Section1'
import Section2 from './CourseContent/Section2'
import Section3 from './CourseContent/Section3'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'

function CourseContent() {
  const [data,setData]=useState()
  const params=useParams()
  console.log("ID",params.id)

  return (
    <div>
        <Section1 data={data}/>
        <Section2 data={data}/>
        <Section3  data={data}/>
    </div>
  )
}

export default CourseContent