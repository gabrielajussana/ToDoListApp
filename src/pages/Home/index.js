import {React} from 'react';
import {Link} from 'react-router-dom'
import {Container, WhiteContainer, ButtonNext} from './styles.js';
import home from '../../assets/home.png';
import '../../global.css';
import {AiOutlineArrowRight} from 'react-icons/ai'


function Home() {
  return (
   <Container>
<<<<<<< HEAD
    <WhiteContainer>
      <img src={home} alt=""/>
      <h1>Gerencie as suas tarefas</h1>
    </WhiteContainer>
<<<<<<< HEAD
    <ButtonNext>
      <AiOutlineArrowRight />
    </ButtonNext>
=======
    
>>>>>>> be82ed1e19d58368dba3c72116bf30cede75e15d
=======
    <Link to="/main">
      <ButtonNext>
        <AiOutlineArrowRight />
      </ButtonNext>
    </Link>
>>>>>>> 146e7d07af7c82ebe6dec6a47d96dec0f7e01a8d
   </Container>
  );
}

export default Home;
