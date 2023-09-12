import { FaLinkedinIn, FaGithub, FaFacebook} from 'react-icons/fa'

import '../styles/components/Icons.sass'

const socialNetworks = [
    {name:'linkedin',icon: <FaLinkedinIn />,href:'https://www.linkedin.com/in/alecson-ernandes-100b3416a/'},
    {name:'github',icon: <FaGithub />,href:'https://github.com/Allecson'},
    {name:'facebook',icon: <FaFacebook />,href:'https://www.facebook.com/alecson.ernandes'},
];

const Icons = () =>{
    return <div id='social-medias'>
        {socialNetworks.map((network)=>(
            <a href={network.href} target='_blank' className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </div>
}
export default Icons;