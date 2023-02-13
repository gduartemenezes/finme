import {Container,Content,ContentChild} from './styles'

export default function LandingPage() {
    return <Container>
        <Content>
            <ContentChild>
                <div>FinME</div>
                <div>Centralize o controle das suas finanças</div>
                <div>de forma rápida e segura</div>
                <button>Iniciar</button>
            </ContentChild>
        </Content>
    </Container>
}


