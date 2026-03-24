import React from 'react'
import './Tech.css'
import ExploreTech from '../../../components/ExploreTech/ExploreTech'
import TechDisplay from '../../../components/TechDisplay/TechDisplay'

const Tech = () => {
  return (
    <div className='tech'>
        <ExploreTech />
        <TechDisplay />
    </div>
  )
}

export default Tech
