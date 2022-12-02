import {Container} from './styles';
import styles from "./register.module.css";
import { Outlet, Link } from "react-router-dom";
import { FcPrevious } from "react-icons/fc";
import {FaUserCircle} from 'react-icons/fa';
import imgCadastro from '../../assets/imgRegister.png';

function Adoption(){
   
   function Registrar(){
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const nome = document.getElementById('nome').value;

      
          if (email !== "" && senha !== "" && nome !==""){
              alert('Registro efetuado com sucesso!'); 
          }else{
              alert('Preencha os campos corretamente!');
          }
  }

   return( <Container>
         
         <div className={styles.designInferiorDireito} ></div>
            <div className={styles.iconVoltar} >
               <Link to="/Login"> <FcPrevious/></Link> 
         </div>
         <div className={styles.titulo}>
            <div className={styles.user}><FaUserCircle /></div>
            <h2 >CRIAR NOVA CONTA</h2>
         </div>
            <br/>
         <form >
               <input className={styles.dados} id="nome" type="name" name="nome" placeholder="Nome" ></input>
               <input className={styles.dados} id="email" type="e-mail" name="email" placeholder="E-mail" ></input>
               <input className={styles.dados} id="senha" type="password" name="senha" placeholder="Criar Senha" ></input>
               <button className={styles.botaoEnviar} type="submit" name="login"  value="" onClick={Registrar}> Registrar</button>   
         </form>
         
         <img src={imgCadastro} alt=""/>

         <Outlet />
   </Container>);
}

export default Adoption;
