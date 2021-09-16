import './App.css';
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

function Header(props) {
  return (
    <h1>{props.name}'s App</h1>
  );
}

function Main(props) {
  return (
    <section>
      <img src={logo} height={200} />
      <p>I am a developer and learning React</p>
      <ul style={{display: "inline-block"}}>
        {props.skills.map((skill,i) => (<li key={i} style={{textAlign:"left"}}>{skill}</li>))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <div>
      <p>Contact me @ sankalppandey1993@gmail.com</p>
      <p>Copyright {props.year}</p>
    </div>
  );
}

const skills = [
  "HTML5",
  "Angular",
  "CSS3"
]

function App({login}) {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then((response)=>response.json())
    .then(setData);
  }, [])
  if(data){
    return (
      <div className="App">
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img src={data.avatar_url} alt={data.login}/>
      </div>
    );
  }
  return (
    <div>No User Available!</div>
  )
}

export default App;
