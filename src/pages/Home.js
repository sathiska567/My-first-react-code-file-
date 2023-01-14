import React from 'react'
import Content from '../components/Content'
import Content01 from '../components/Content01'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
       <h1>This is the first page </h1> 
    <TopicBox food="kottu" />
    <TopicBox food="Rice"/>
    <TopicBox food="Hoppers"/>



    <Content01 />
    </div>
  )
}
