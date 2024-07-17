import '../sass/Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cryptoJs from 'crypto-js';
import { useState } from 'react';
import Swal from 'sweetalert2';

function Login() {

  //! Armazena os dados e guarda os estados locais 
  const [email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const navigate = useNavigate();


  function clearInputs(){
    //! Limpa os campos do formulário
    setEmail('');
    setPassword('');
    return;
  }

  
  function handleLogin(evento){

    //! Adiciona o método preventDefault() para impedir o envio do formulario.
    evento.preventDefault();

    //! recupera o array de usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //! procura pelo endereço de email no array de usuários
    const user = users.find(user => user.email === email);

    //! se existir o email correspondente no array de usuarios retorna true
    if(user){

      //! descriptografa a senha
      const decryptedPassword = cryptoJs.AES.decrypt(user.password, 'chave-secreta').toString(cryptoJs.enc.Utf8);

      //! pega o nome do usuário correspondente ao do email digitado no login
      const usernames = user.userName;

      //! compara a senha descriptografada que está armazenada no cadastro
      //! com a senha fornecida pelo usuario no login
      if(decryptedPassword === password){

        //! se todas as verficações retornarem true, grava o nome do usuário no localStorage,
        //! e redireciona para a home do sistema
        localStorage.setItem('usernames', usernames );
        
        navigate('/');

      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error! :(',
          text: 'Usuário ou senha incorretos!',
          showConfirmButton: false,
          timer: 3000
        })
        
        clearInputs();
      }

    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ops! :(',
        text: 'Usuário não encontrado!',
        showConfirmButton: false,
        timer: 3000
      })
    }

    clearInputs();
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