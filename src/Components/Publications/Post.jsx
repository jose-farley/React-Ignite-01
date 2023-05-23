import style from './Post.module.css'
export function Post(){
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.postAuthor}>
                    <img className={style.profilePicture} src="https://avatars.githubusercontent.com/u/93267104?v=4" alt="imagem de perfil"/> 
                    <div className={style.profileInfo}>
                        <strong>José Farley</strong>
                        <span>Student</span>
                    </div>
                </div>
               
                <span className={style.subText}>Publicado há 1h</span>
            </div>
            <div className={style.content}>
                <p>Fala galeraa 👋</p> 
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <a href='#'>#novoprojeto</a> <a href="#">#nlw </a><a href="">#rocketseat</a> 
            </div>
            <form className={style.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>
        </div>   
    )
}