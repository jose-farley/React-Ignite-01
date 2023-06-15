import style from './Comment.module.css'
import {Trash, ThumbsUp} from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface CommentProps{
    content:string
    onDeleteComment:(commentToDelete:string)=>void
}

export function Comment({content, onDeleteComment}:CommentProps){
    let [applause ,setApplause] = useState(0)
    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleCommentApplause(){
        setApplause((state)=> { return state + 1})
    }
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
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleCommentApplause} title="Aplaudir">
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{applause}</span>
                    </button>
                </footer>
           </div>
        </div>
    )
}