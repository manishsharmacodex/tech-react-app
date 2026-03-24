import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreTech from '../../components/ExploreTech/ExploreTech'
import TechDisplay from '../../components/TechDisplay/TechDisplay'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreTech category={category} setCategory={setCategory} />
      <TechDisplay category={category} />
    </div>
  )
}

export default Home
