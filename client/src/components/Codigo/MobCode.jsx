import React from 'react'
import { useParams } from 'react-router-dom'
import './MobCode.css'
export default function MobCode({mobs}) {
  const names = mobs.map(m=>(m.name))
  return (
    <div className='codeMob-main'>
      <code>

        function eggs<br></br>
          
         <code>
          {names.map(m=>(
          <p>  kipper_egg zombie  {m}     boss  </p> 
          ))}
         
         </code>
          
         
        </code>
      
    </div>
  )
}
