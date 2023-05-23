import "./global.css"
import style from './App.module.css'
import { Header } from "./Components/Header/Header"
import { Post } from "./Components/Publications/Post"
import { Sidebar } from "./Components/Sidebar/Sidebar"

export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </main>
      </div>
    </div>
  )
}


