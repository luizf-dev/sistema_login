import React,{ useState } from 'react';
import '../sass/SignUp.scss';
import {Link} from "react-router-dom";
import cryptoJs from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function SignUp() { 

  //! Armazena os dados e guarda os estados locais
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  //! Essa função captura os valores dos campos de entrada, criptografa a senha e salva os dados no localStorage
  function register(evento){

    //! Adiciona o método preventDefault() para impedir o envio do formulario.
    evento.preventDefault();

    //! Limpa os campos do formulário
    function clearInputs(){
      setUserName('');
      setEmail('');
      setPassword('');
      return;
    }

    //! Verifica se os campos não estão vazios
    if(!userName || !email || !password){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ops!',
        text: 'Preencha o campo corretamente!',
        showConfirmButton: false,
        timer: 2000
      })

      clearInputs();
    }

      //! recupera o array de usuários do localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      //! Verifica se o usuário já existe no cadastro
      const userExists = users.some(user => user.email === email)

        if(userExists){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Ops!',
            text: 'Usuário já cadastrado com esse endereço de email!',
            showConfirmButton: false,
            timer: 2000
          })

        clearInputs();
      }

       //! O cryptoJS.AES.encrypt criptografa a senha usando o algoritmo AES com a chave secreta 'chave-secreta' e a converte para uma string.
       const encryptedPassword = cryptoJs.AES.encrypt(password, 'chave-secreta').toString();


      //! Adiciona um novo usuário ao array
      const newUser = {userName, email, password: encryptedPassword};
      users.push(newUser);

      //! Salva o array atualizado no localStorage
      localStorage.setItem('users', JSON.stringify(users));

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'OK!',
        text: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 3000
      })

      //!Redireciona para a página de login
      navigate('/');
  } 

  return (
    <div className='container'>
     <div className='sign-up'>
      <h1 className='title-sign-up'>Inscreva-se!</h1>
      <h6 className='subtitle-sign-up'>Já possui conta? <Link to="/">Faça login aqui.</Link></h6>
      <form>
        <label>Nome </label>
        <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
        <label>Email </label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label>Senha </label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit' onClick={register}>Cadastrar</button>
      </form>
     </div>
    </div>
  );
}

export default SignUp;