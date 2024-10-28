import React, { useEffect, useState } from 'react'
import Section1 from './CourseContent/Section1'
import Section2 from './CourseContent/Section2'
import Section3 from './CourseContent/Section3'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import request from "axios";
import { base_url } from '../../components/Baseurl'

function CourseContent() {
  const [data,setData]=useState();
  const params=useParams();
  // console.log("ID",params.id)


  function getcoursedetails(){
      request.get(`${base_url}course/getcourse?id=${params.id}`).then((res)=>{
        setData(res?.data?.results[0]);
      }).catch((err)=>{
        console.log("Error getting courses on course details",err)
      }).finally(()=>{
        console.log("course details getting")
      })
  }
  useEffect(()=>{
    getcoursedetails()
  },[])

  return (
    <div>
        <Section1 data={data}/>
        <Section2 data={data}/>
        <Section3  data={data}/>
    </div>
  )
}

export default CourseContent