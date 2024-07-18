import React from "react";
import '../sass/Home.scss';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home(){

    const userName = localStorage.getItem('usernames');
    const navigate = useNavigate();


    function logout(){
        localStorage.removeItem('usernames');
        navigate('/');
    }

    if(!userName){
        return(
            <div className="container-home">
                <div className="home">
                    <h4>Sem permissão para acessar a Home!</h4>
                    <Link to="/"><h3 className="login-alert">Efetue seu login de usuário!</h3> </Link>                
                </div>
            </div>
        );
    }else{
    return(
        <div className="container-home">
            <div className="home">
                <h2>Olá, {userName} !</h2>
                <h3>Seja bem-vindo ao nosso sistema!</h3>
                <button onClick={logout}>Sair</button>
            </div>
        </div>
    );
    }
}

export default Home;