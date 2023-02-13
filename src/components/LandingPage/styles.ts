import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #212529;
    color: #FFFFFF;
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 200px 0;
    @media(max-width: 768px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ContentChild = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props ? '': ''}  flex-start;
`
export const TextDiv = styled.div`

`