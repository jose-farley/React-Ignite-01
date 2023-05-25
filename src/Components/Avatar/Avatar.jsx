//https://avatars.githubusercontent.com/u/93267104?v=4
import style from './Avatar.module.css'
export function Avatar({path, hasBorder = true}) {

    return (
        < img className={ (hasBorder == true) ? style.profilePicture : style.profilePictureNoBorder}
        src={path}
        alt="imagem de perfil"
        />
    )
   
}