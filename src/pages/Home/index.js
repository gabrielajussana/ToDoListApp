import {React, Link} from 'react';
import {Container, WhiteContainer, ButtonNext} from './styles.js';
import home from '../../assets/home.png';
import '../../global.css';
import {AiOutlineArrowRight} from 'react-icons/ai'


function Home() {
  return (
   <Container>
    <WhiteContainer>
      <img src={home} alt=""/>
      <h1>Gerencie as suas tarefas</h1>
    </WhiteContainer>
    <ButtonNext>
      <AiOutlineArrowRight />
    </ButtonNext>
   </Container>
  );
}

export default Home;
