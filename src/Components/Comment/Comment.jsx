import style from './Comment.module.css'
import {Trash, ThumbsUp} from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Avatar'
export function Comment({content}){
    return (
        <div className={style.comment}>
           <Avatar hasBorder={false} path="https://avatars.githubusercontent.com/u/93267104?v=4"/> 
           <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>José Farley</strong>
                            <time title="11 de maio às 08:13:25" dateTime='2023-05-19:36:26' className={style.subText}>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button title="Aplaudir">
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
           </div>
        </div>
    )
}