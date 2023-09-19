import '../styles/components/navBar.sass'
import Icons from './Icons'
import MenuMobile from './menuMobile';
const NavBar = () =>{
    return <header >
        <nav id="navBar">
            <h1 class='h1__navBar'>Alecson Boaventura</h1>
            <ul class='ul__navBar'>
                <li><a>Home</a></li>
                <li><a href='#div-main'>Sobre</a></li>
                <li><a href='#projects'>Projetos</a></li>
            </ul>
            <Icons />
            <MenuMobile />

        
        </nav>
    </header>
};
export default NavBar;