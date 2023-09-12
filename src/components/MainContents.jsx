import '../styles/components/MainContents.sass'
import Avatar from "../img/Alecson.jpeg"
const MainContents = () =>{
    return <div id='div-main'>
            <img src={Avatar} id="alecson"></img>
            <div id='div-textos'>
                <h3 id='h3-main'>Sobre Min</h3>
                <p id='p-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Itaque eius quas, fuga ipsa et incidunt te
                mporibus libero rerum, enim, minima quasi corporis. Eius, nihil cupiditate
                 soluta quaerat provident commodi sunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius quas,
                 fuga ipsa et incidunt temporibus libero rerum, enim, minima 
                quasi corporis. Eius, nihil cupiditate soluta quaerat provident commodi sunt!</p>
                <a href='#'>Baixar Currículo ➞</a>
            </div>
           </div>
};
export default MainContents;