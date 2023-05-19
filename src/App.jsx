import { Header } from "./Components/Header"
import "./global.css"
import style from './App.module.css'
import { Sidebar } from "./Components/Sidebar"
export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main></main>
      </div>
    </div>
  )
}


