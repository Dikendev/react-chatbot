import React, {useState} from 'react';
import './chatbot.css';



function Chatbot() {
  
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const aviso = 'Chat BOT';
  const handleSubmit = (event) => {
    event.preventDefault();
    const  UserInputText = userInput.toLowerCase();
   
    if (UserInputText =="oi") {
      setResponse('Tudo');
    }     
    else if (UserInputText == "incrivel") {
      setResponse('Realmente é incrivel oque podemos fazer com React');
    } 
    else if (UserInputText == "data" ) {
        setResponse( ` A data de hoje é : ${new Date().toLocaleDateString()}`);
    } else {
      setResponse("Nao entendi, digite novamente")
    }
    setUserInput('');
  }
  
  return (
    <div className="chatgpt-bg">
      <div className='chatgpt-container'>
        <form onSubmit={handleSubmit}>
          <p>{aviso}</p>
          <input type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)} />
          <button type="submit" disabled={!userInput}> Submit</button>
        </form>
        <p>{response}</p> 
      </div>
    </div>
  );
}

export default Chatbot;
