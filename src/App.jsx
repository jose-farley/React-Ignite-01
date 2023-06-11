import "./global.css"
import style from './App.module.css'
import { Header } from "./Components/Header/Header"
import { Post } from "./Components/Publications/Post"
import { Sidebar } from "./Components/Sidebar/Sidebar"

const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://avatars.githubusercontent.com/u/93267104?v=4",
      name:"José Farley Sousa da Silva",
      role:"Student"
    },
    content:[
      {type:"paragraph", content:"Fala galeraa 👋"},
      {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content:"👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-05-29 10:54:23")
  }
  
]
export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (<Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />)
            })
          }
        </main>
      </div>
    </div>
  )
}


