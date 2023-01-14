import React, {useState} from 'react';


function Chatbot() {
  
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const  UserInputText = userInput.toLowerCase();

    if (UserInputText == "oi") {
      setResponse('Em que posso lhe ajudar?');
    } 
    
    if (UserInputText == "incrivel") {
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
    /* Code for handling user input and displaying response goes here */
   <div className='chatgpt-bg'>
     <form onSubmit={handleSubmit}>
     <input type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
     <button type="submit">Submit</button>
     </form>
    <p>{response}</p> 
   </div>
  );
}

export default Chatbot;
