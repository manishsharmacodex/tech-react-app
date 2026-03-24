import React from 'react'
import './ExploreTech.css'
import { tech_list } from '../../assets/assets'

const ExploreTech = ({category,setCategory}) => {
  return (
    <div className='explore-tech'>
      <h1>Explore our tech</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit mollitia architecto id eaque cumque! Totam nisi a impedit porro iure adipisci quisquam repellendus molestiae quis commodi! Cupiditate sequi pariatur maiores quidem sunt doloribus ex. Eaque hic odit sed ducimus!</p>
      <div className="explore-tech-list">
        {tech_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.tech_name?"All":item.tech_name)} key={index} className='explore-tech-list-item'>
                    <img className={category===item.tech_name?"active":""} src={item.tech_image} alt="" />
                    <p>{item.tech_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreTech
