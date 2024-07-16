import React from "react";
import '../sass/Home.scss';

function Home(){

    const userName = localStorage.getItem('usernames');


    return(
        <div className="container-home">
            <div className="home">
                <h2>Olá, {userName}</h2>
                <h3>Seja bem-vindo ao nosso sistema!</h3>
            </div>
        </div>
    );
}

export default Home;