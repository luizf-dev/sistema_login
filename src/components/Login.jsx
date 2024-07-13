import '../sass/Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
     <div className='login'>
      <h1 className='title-login'>Login</h1>
      <Link to="/cadastro"  className='subtitle-login'><h6>Ou inscreva-se para continuar!</h6></Link>
      <form action="">
        <label htmlFor="">Nome </label>
        <input type="text" />
        <label htmlFor="">Email </label>
        <input type="email" />
        <button>Login</button>
      </form>
     </div>
    </div>
  );
}

export default Login;