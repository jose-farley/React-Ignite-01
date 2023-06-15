import style from './Sidebar.module.css'
import backgroundImage from '../../assets/sidebar/background-image.avif'
import {PencilLine} from '@phosphor-icons/react'
import { Avatar } from '../Avatar/Avatar'
export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src={backgroundImage}/>
            <div className={style.profile}>
                <Avatar path="https://avatars.githubusercontent.com/u/93267104?v=4"/>
                <strong>José Farley Sousa da Silva</strong>
                <span>Student</span>
                <footer>  
                    <a href="#"><PencilLine size={20}/>Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    )
}