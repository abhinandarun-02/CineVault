import React from 'react'
import { hrrorlst } from '@/data/horrormvs'

function hrrorpage() {
  return (
    <div>
    <div>hrrorpage</div>
    <div className="grid grid-cols-5 gap-4">
    {
        hrrorlst.map((mvlst) =>(
          <div className='pl-3 pb-5'>
            
            <a href="/testpg" target="_blank">
              <p className=' pt-5 pb-5 '>{mvlst.title}</p>
              
                <img className="object-cover w-250 h-250" src={mvlst.image} alt={mvlst.alt} />
            
            </a>
           
            <p>{mvlst.desc}</p>
            
          </div>
        ))
      }
      </div>
      </div>
  )
}

export default hrrorpage