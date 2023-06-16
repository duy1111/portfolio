import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Giải mật thư
</Title>
<Description>
Chúng tôi có khả năng giải mật thư siêu đỉnh
</Description>
<Description>
<strong>thành quả</strong>
<p>
    <ul>
        <li>Đứng nhất mật thư trong tuần 1</li>
        <li>Đứng nhất mật thư trong tuần 2</li>
    </ul>
</p>
</Description>
<Description>
<strong></strong>
<p>
    
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Team work
</Title>
<Description>
Đội ngũ "Thích Ăn Thua" không chỉ đáng yêu mà còn có kỹ năng teamwork xuất sắc. 



</Description>
Chúng tôi lắng nghe và tôn trọng ý kiến của nhau, không ngại chia sẻ ý tưởng và góp ý để đạt được mục tiêu chung.
Chúng tôi như những mắt cầu vồng, mỗi thành viên đều có một sắc màu riêng, nhưng khi kết hợp lại, chúng tôi tạo ra một hình ảnh tuyệt đẹp. 
<Description>
<strong></strong>

</Description>


            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
