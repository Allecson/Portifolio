import{
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiMysql,
    DiReact,
    DiSass
    
} 
from 'react-icons/di'
import '../styles/components/languages.sass'

const languages = [
    {id:'html',name:'Html5',icon: <DiHtml5/> },
    {id:'css',name:'Css3',icon: <DiCss3/> },
    {id:'javascript',name:'JavaScript',icon: <DiJavascript1/> },
    {id:'mysql',name:'MySql',icon: <DiMysql/> },
    {id:'react',name:'React',icon: <DiReact/> },
    {id:'sass',name:'Sass',icon: <DiSass/> }
];



const Languages = () =>{
    return <div className='languages'>
        {languages.map((lang)=>(
            <div className="languages-icon" id={lang.id} key={lang.id}>
                {lang.icon}
            </div>
        ))}
    </div>
}
export default Languages