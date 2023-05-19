import style from './Header.module.css'
import igniteLogo from '../assets/igniteLogo.png'
export function Header(){
    return (
        <header className={style.header}>
            <img className={style.logo} src={igniteLogo} alt="Logotio do ignite"/>
            <strong>Ignite Feed</strong>
        </header>
    )
}