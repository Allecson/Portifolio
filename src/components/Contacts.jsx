import { FaInstagram, FaWhatsapp} from 'react-icons/fa'
import { BiLogoGmail} from 'react-icons/bi'
import '../styles/components/contacts.sass'

const socialFooters = [
    {name:'instagram',icon: <FaInstagram/>,href:'https://www.instagram.com/alecson.ernandes/'},
    {name:'whatsapp',icon: <FaWhatsapp />,href:'https://wa.me/5561992279471'},
    {name:'gmail',icon: <BiLogoGmail />,href:'mailto:alecson73@gmail.com'},
];

const Contacts = () =>{
    return <div className='div-footer'>
        {socialFooters.map((social)=>(
    <a href={social.href} target='_blank' className='social-footer' id={social.name} key={social.name}>
        {social.icon}
    </a>
    ))}
            <ul class='ul__footer'>
                <li><a href='#alecsonBoav'>Home</a></li>
                <li><a href='#div-main'>Sobre</a></li>
                <li><a href='#projects'>Projetos</a></li>
            </ul>
            <div className='div-p-footer'><p className='p-footer'>Developed in 2023 by &copy;<span>Alecson</span></p></div>
    </div>
    
}
export default Contacts

