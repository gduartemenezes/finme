import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #000000;
`
export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    @media(max-width: 768px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ContentChild = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props ? '': ''}  flex-start;
`
