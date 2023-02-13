import {Container,Content,ContentChild, TextDiv} from './styles'
import illustrationImg from '../../assets/Illustration.png'
export default function LandingPage() {
    return <Container>
        <Content>
            <ContentChild>
                <div>FinME</div>
                <TextDiv><p className='title-1'>Centralize o <br/> controle das suas finanças</p></TextDiv>
                <TextDiv><p className='headline'>de forma rápida e segura</p></TextDiv>
                <button>Iniciar</button>
            </ContentChild>
            <ContentChild>
                <img src={illustrationImg} alt="Illustration" />
            </ContentChild>
        </Content>
    </Container>
}


