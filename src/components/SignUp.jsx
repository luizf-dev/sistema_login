import { useState } from 'react';
import '../sass/SignUp.scss';
import {Link} from "react-router-dom";
import cryptoJs from 'crypto-js';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  //= Armazena os dados e guarda os estados locais
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  //= Captura os valores dos campos de entrada, criptografa a senha e salva os dados no localStorage
  function register(){

    if(!userName || !email || !password){
      alert('Preencha os campos corretamente!');
      return;
    }

    //= O cryptoJS.AES.encrypt criptografa a senha usando o algoritmo AES com a chave secreta 'chave-secreta' e a converte para uma string.
    const encryptedPassword = cryptoJs.AES.encrypt(password, 'chave-secreta').toString();

    //= recupera o array de usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];


    //= Verifica se o usuário já existe no cadastro
    const userExists = users.some(user => user.email === email)
    if(userExists){
      alert('Usuário já cadastrado com esse endereço de email!');
      return;
    }

    //= Adiciona um novo usuário ao array
    const newUser = {userName, email, password: encryptedPassword};
    users.push(newUser);

    //= Salva o array atualizado no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('usuario cadastrado!');
    navigate('/');
  }

  return (
    <div className='container'>
     <div className='sign-up'>
      <h1 className='title-sign-up'>Inscreva-se!</h1>
      <h6 className='subtitle-sign-up'>Já possui conta? <Link to="/">Faça login aqui.</Link></h6>
      <form action="">
        <label htmlFor="">Nome </label>
        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
        <label htmlFor="">Email </label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="">Senha </label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button onClick={register}>Cadastrar</button>
      </form>
     </div>
    </div>
  );
}

export default SignUp;