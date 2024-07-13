import '../sass/SignUp.scss';
import {Link} from "react-router-dom";

function SignUp() {
  return (
    <div className='container'>
     <div className='sign-up'>
      <h1 className='title-sign-up'>Inscreva-se!</h1>
      <h6 className='subtitle-sign-up'>Já possui conta? <Link to="/">Faça login aqui.</Link></h6>
      <form action="">
        <label htmlFor="">Nome </label>
        <input type="text" />
        <label htmlFor="">Email </label>
        <input type="email" />
        <label htmlFor="">Senha </label>
        <input type="password" />
        <button>Cadastrar</button>
      </form>
     </div>
    </div>
  );
}

export default SignUp;