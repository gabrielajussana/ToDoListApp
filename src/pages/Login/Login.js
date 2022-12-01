import React from 'react';
import { Container } from "./styles";
import styles from "./login.module.css";
import { Outlet, Link } from "react-router-dom";

function Login(){

    function Enviar(){
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
            if (email !== "" && senha !== ""){
                alert('Logado com sucesso!'); 
            }else{
                alert('Preencha os campos corretamente!');
            }
    }

   return <Container>
 
        <h3>To Do List APP</h3>
            <br></br>
            <div className={styles.designInferiorDireito} ></div>
            <div className={styles.designInferiorEsquerdo} ></div>
            <form >
                <input className={styles.dados} id="email" type="e-mail" name="email" placeholder="E-mail" ></input>
                <input className={styles.dados} id="senha" type="password" name="senha" placeholder="Senha" ></input>
                <button className={styles.botaoEnviar} type="submit" name="login"  value="" onClick={Enviar} >Login</button>   
                <label className={styles.manterConectado}> <input className={styles.manterConectado} type="checkbox"></input> Mantenha-me conectado</label>
            </form>
            <div className={styles.configuracaoConta}>
                    <Link className={styles.esqueceuSenha} to="/">Esqueceu a senha?</Link>
                    <Link className={styles.novaConta} to="/register">Criar nova conta</Link>
            </div>
            
        
         

      <Outlet />
    </Container>

}



export default Login;