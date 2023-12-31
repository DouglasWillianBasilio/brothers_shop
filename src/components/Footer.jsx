import { Instagram, Phone, Room, WhatsApp, YouTube } from "@material-ui/icons"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
    height: 30px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BROTHERS ELETRÔNICA.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum illum quasi exercitationem. Dolor explicabo eligendi iure, aliquid et ducimus molestias, aut nulla voluptate facilis dolore blanditiis fugit labore corporis autem?</Desc>
                <SocialContainer>
                    <SocialIcon color="E60023">
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Uteis</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Aparelhos para Cozinha</ListItem>
                    <ListItem>Aparelhos para Sala</ListItem>
                    <ListItem>Aparelhos para Quarto</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Lista de Aparelhos</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem>
                   <Room style={{marginRight:"10px"}} /> Avenida Lucia Helena Gonçalves Viana, 916
                </ContactItem>
                <ContactItem>
                   <Phone tyle={{marginRight:"20px"}} /> WhatsApp: +55 (43) 9 8483-8009
                </ContactItem>
                <Payment src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3.png"/>
            </Right>
        </Container>
    )
}

export default Footer
