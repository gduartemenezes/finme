import {Container,Content,ContentChild, TextDiv} from './styles'
import illustrationImg from '../../assets/Illustration.png'

import { Button } from '../UI/Button'

export default function LandingPage() {
    return <Container>
        <Content>
            <ContentChild>
                <TextDiv>FinME</TextDiv>
                <TextDiv><p className='title-1'>Centralize o <br/> controle das suas finanças</p></TextDiv>
                <TextDiv><p className='headline'>de forma rápida e segura</p></TextDiv>
                <Button onClick={()=>{}} text='Iniciar' width='241px' />
            </ContentChild>
            <ContentChild>
                <img src={illustrationImg} alt="Illustration" width={"90%"} height={"90%"} />
            </ContentChild>
        </Content>
    </Container>
}


