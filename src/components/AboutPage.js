import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        "Thích Ăn Thua" - Nhóm chúng tôi là một đội ngũ dễ thương đến đáng yêu. Dù thắng hay thua, chúng tôi không bao giờ ngại trở thành những chú ếch nhỏ dũng cảm, nhảy vào những trận đấu với nụ cười rạng rỡ trên môi. Chúng tôi không chỉ thích "ăn" thành công mà còn hứng thú với "thua" để học hỏi và trưởng thành. Bên cạnh việc trổ tài ăn uống, chúng tôi còn chăm chỉ chinh phục mục tiêu và chia sẻ niềm vui với những người xung quanh. Với tinh thần dễ thương và đáng yêu, chúng tôi là đội ngũ "Thích Ăn Thua" - những người bạn đáng yêu không chỉ trong trò chơi, mà còn trong trái tim!<br />
         <br/>
         
<br/> 
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
