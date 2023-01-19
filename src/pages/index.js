import styles from '@/styles/Home.module.css'
import { genreArray } from '@/data/genre'
import Movie from "@/pages/movie";

export default function Home() {
  return (
   <div>
      <Movie></Movie>
   </div>
  )
}
