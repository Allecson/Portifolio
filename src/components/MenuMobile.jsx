import { useState } from "react"
import '../styles/components/menuMobile.sass'
const MenuMobile = () =>{
    const [active , setMode]= useState(false);
    const ToggleMode = () =>{
        setMode(!active)
    }
    return <div className='menu-mobile'>

        <div className={active ? 'icon iconActive':'icon'} onClick={ToggleMode}>
            <div className='hamburguer hamburguerIcon'></div>
        </div>  
        <div className={active ? 'menu menuOpen' : 'menu menuClosed'}>
            <div className='list'>
                <ul className='listItems'>
                    <li><a>Home</a></li>
                    <li><a href="#div-main">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                </ul>
            </div>
        </div> 
    </div>
}
export default MenuMobile