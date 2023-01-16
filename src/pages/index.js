import styles from '@/styles/Home.module.css'
import { genreArray } from '@/data/genre'

export default function Home() {
  return (
   <div>
      <center>
          <h1>CineVault</h1>
          <p>INTRODUCTION------------------</p>
      </center>
      
      {
        genreArray.map((genre) =>(
          <div>
            <a href={genre.link} target="_blank">
                <img width="250px" height="250px" className="card-img-top" src={genre.image} alt={genre.alt} />
            </a>
            <p >{genre.message}</p>
          </div>
        ))
      }

      <footer>
          <a target="_blank" href="About.html">About you</a>
          <a target="_blank" href="https://www.facebook.com/petrichor.iitpkd">Link to facebook page of petrichor</a>
          <a target="_blank" href="https://instagram.com/petrichor.iitpkd?igshid=MDM4ZDc5MmU=">Link to instagram page of petrichor</a>
      </footer>
   </div>
  )
}
