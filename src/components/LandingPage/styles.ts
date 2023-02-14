import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #212529;
    color: #FFFFFF;
`
export const Content = styled.div`
    width: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding-top: 200px;
    @media(max-width: 768px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 100px;

    }
`

export const ContentChild = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props ? '': ''}  flex-start;
    @media(max-width: 768px) {
        width: 90%;
        margin-bottom: 15px;
    }
   
`
export const TextDiv = styled.div`
    margin-bottom: 15px;
`