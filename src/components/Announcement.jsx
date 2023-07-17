import { styled } from "styled-components"

const Container = styled.div `
    height: 30px;
    background-color: teal;
    color: white;
`

function Announcement() {
  return (
    <Container>
        Toda a loja com decontos especiais!
    </Container>
  )
}

export default Announcement
