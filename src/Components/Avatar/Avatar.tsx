//https://avatars.githubusercontent.com/u/93267104?v=4
import style from './Avatar.module.css'
import {ImgHTMLAttributes} from 'react'
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    path:string
    hasBorder?:boolean
}

export function Avatar({path, hasBorder = true, ...props}:AvatarProps) {

    return (
        < img className={ (hasBorder == true) ? style.profilePicture : style.profilePictureNoBorder}
        src={path}
        alt="imagem de perfil"
        {...props}
        />
    )
   
}