import '../sass/Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cryptoJs from 'crypto-js';
import { useState } from 'react';

function Login() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(evento){

    evento.preventDefault();

    //const storageUserName = localStorage.getItem('userName');
    //const storageEmail = localStorage.getItem('email');
    //const storagePassword = localStorage.getItem('password');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email);

    if(user){
      const decryptedPassword = cryptoJs.AES.decrypt(user.password, 'chave-secreta').toString(cryptoJs.enc.Utf8);

      if(decryptedPassword === password){
        navigate('/home');
      }else{
        alert('Usuário ou senha incorretos!');
      }

    }else{
      alert('Usuário não encontrado!');
    }
  }




  return (
    <div className='container'>
     <div className='login'>
      <h1 className='title-login'>Login</h1>
      <Link to="/cadastro"  className='subtitle-login'><h6>Ou inscreva-se para continuar!</h6></Link>
      <form action="">
        <label>Email </label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label>Senha </label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit' onClick={handleLogin}>Login</button>
      </form>
     </div>
    </div>
  );
}

export default Login;