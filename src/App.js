import './App.css';
import Box from '@mui/material/Box';
import jesse from "../src/assets/jesse.webp";
import gus from "../src/assets/gus.jpg";
import hank from "../src/assets/hank.png";
import skyler from "../src/assets/skyler.jpeg";
import walter from "../src/assets/walterwhite.jpg";
import wwj from "../src/assets/wwj.webp";
import saul from "../src/assets/saul.jpg";
import mike from "../src/assets/mike.jpeg";
import Button from '@mui/material/Button';
import {useState} from 'react';
import axios from 'axios';



function App() {

  const [quote, setQuote] = useState('Better call Saul');
  const [author, setAuthor] = useState('Saul Goodman');
  const [imagem, setImagem] = useState(5);

  const foto = [
    {author: "Skyler White", image:skyler, index:0},
    {author: "Jesse Pinkman" , image:jesse, index: 1},
    {author: "Gustavo Fring", image:gus, index: 2},
    {author: "Hank Schrader", image:hank, index:3},
    {author: "Walter White" , image: walter, index:4},
    {author: "Saul Goodman", image:saul, index: 5},
    {author: "Mike Ehrmantraut", image:mike, index: 6},
    {author: "Walter White Jr" , image: wwj, index:7},
    {author: "Gus Fring", image:gus, index: 8},


  ];
  // useEffect(()=>{
  //   getLocation()
  // },[]);
  
  const getLocation = async ()=>{
    const msg = new SpeechSynthesisUtterance()
    const res = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
    setQuote(res.data[0].quote);
    setAuthor(res.data[0].author);
    setImagem(foto.filter(obj =>(obj.author === author)))
    console.log(imagem)
    msg.text=res.data[0].quote;
    window.speechSynthesis.speak(msg)

  }
  return (
    <div className="Appi" style={{backgroundColor:'#093009'}}>
      <Box sx={{p:5, color:'white', display: 'flex', justifyContent:'center'}}>
        <h1>Breaking Bad Quotes</h1>
      </Box>
      <Box sx={{p:5, color:'white', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <h1>{quote}</h1>
        <h1>{author}</h1>
        <img  width={300} height={300}src={imagem=== 5? foto[5]?.image: foto[(foto.filter(obj =>(obj.author === author)))[0]?.index]?.image}/> 
      </Box>
      <Box sx={{p:5, color:'white', display: 'flex', justifyContent:'center'}}>
        <Button variant='contained' onClick={()=>getLocation()} >Generate</Button>
      </Box>

    </div>
  );
}

export default App;
