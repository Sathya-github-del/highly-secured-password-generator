import { useState } from 'react';
import './App.css';

function App() {

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeemojis, setIncludeEmojies] = useState("");


  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSpecialChars) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (includeemojis) chars += " 😊👍🤩";


    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  return (
    <div className='securedpassgen'>
      <h1>Password_Generator</h1>
      <input type="number" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
      <label>Include Uppercase Letters: <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} /></label>
      <label>Include Numbers: <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} /></label>
      <label>Include Special Characters: <input type="checkbox" checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} /></label>
      <label>Include Emojies: <input type="checkbox" checked={includeemojis} onChange={() => setIncludeEmojies(!includeemojis)} /></label>
      <button onClick={generatePassword}>Generate Password</button>
      <p className="text-green-500">Password: {password}</p>
      <div className='handlePasswordLengthChange'>
        <label>Password Length: <input type="number" value={passwordLength} onChange={handlePasswordLengthChange} /></label>
      </div>



    </div>
  );

}

export default App;
