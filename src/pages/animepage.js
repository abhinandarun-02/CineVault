import React from 'react'
import { animelst } from '@/data/animemvs'

function animepage() {
  return (
    <div>
    <div>animepage</div>
    {
        animelst.map((mvlst) =>(
          <div className='pl-3 pb-5' key={mvlst.id}>
            <a href="/testpg" target="_blank"><p className=' pt-5 pb-5'>{mvlst.title}</p>
                <img width="250px" height="250px" className="card-img-top pb-5 " src={mvlst.image} alt={mvlst.alt} />
            </a>
            <p>{mvlst.desc}</p>
          </div>
        ))
      }
      </div>
  )
}

export default animepage