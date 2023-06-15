/*
    No curso, as duas principais formas apresentadas de trabalhar com datas são através do pacote date-fns e da API nativa do Javascript que é a Intl

    link da documentação da Intl :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

    link da documentação do date-fns:https://date-fns.org/v2.30.0/docs/format

    pelo que foi mostrado a ferramenta mais interessante de se utilizar é a date-fns. Como o date-fns é um pacote externo você precisa instalá-lo usando um dos seguintes comandos:
    -> npm i date-fns
    -> yarn add date-fns
*/

import style from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent} from 'react'

interface Author {
    name:string
    role:string
    avatarUrl:string
}
interface Content {
    type:'paragraph'|'link'
    content:string
}

export interface IPost{
    id:number
    author:Author
    publishedAt:Date
    content:Content[] 
}
interface PostProps {
    post:IPost
 }
export function Post({post}:PostProps){
    const [comments, setComment] = useState([
       "ótimo post, parabéns!" 
    ])
    const [newComment, setNewComment] = useState('')
    const publishedDateFormat = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h' ", {
    locale:ptbr,
    })
    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale:ptbr,
    addSuffix:true
    }) 
    function handleCommentSubmit(event:FormEvent){
    event.preventDefault()
    setComment([...comments, newComment])
    setNewComment("")
    }
    function newCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
    }
    function onDeleteComment(commentToDelete:string){
    
    const newCommentWithoutDeletedOne = comments.filter(comment =>{
        if(comment != commentToDelete) return comment
    })
    setComment(newCommentWithoutDeletedOne)
    }
    function handleInvalidComment(event:InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo é obrigatório!")
    }
    let isNewCommentEmpty = (newComment.length == 0)?true:false
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.postAuthor}>
                    <Avatar path={post.author.avatarUrl}/> 
                    <div className={style.profileInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
               
                <time title={publishedDateFormat} dateTime={post.publishedAt.toISOString()} className={style.subText}>
                    {publishedDateRelativeNow}
                </time>
            </div>
            <div className={style.content}>
             {post.content.map(line=>{
                if(line.type == "paragraph"){
                    return <p key={Math.random()}>{line.content}</p>
                }
                if(line.type=="link"){
                    return <p key={Math.random()}><a href="#">{line.content}</a></p>
                }
             })}
            </div>
            <form onSubmit={handleCommentSubmit} className={style.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea onInvalid={handleInvalidComment} required onChange={newCommentChange} name="commentText" placeholder='Deixe seu comentário'
                value={newComment}/>
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>  
            </form>
            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Comment onDeleteComment={onDeleteComment} key={Math.random()} content={comment}/>
                })}
            </div>
        </div>   
    )
}