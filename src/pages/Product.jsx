import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newletter from "../components/Newletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.div`
    margin: 20px 0px ;
`
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const FilterEle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.tcdn.com.br/img/img_prod/604142/placa_principal_tv_semp_toshiba_le1956_a_w_modelo_35017721_rev_00_5451_1_efe03bc3268dde354c9cd46ba4ffeee9.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>JUPITER OFFLINE</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem praesentium iure minima debitis ad architecto, dolorem aliquid voluptate suscipit officiis animi pariatur eveniet enim provident dolorum. Nisi, quasi voluptas.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Eletrônicos</FilterTitle>
                            <FilterEle color="Eletrônicos para Sala"/>
                            <FilterEle color="Eletrônicos para Cozinha"/>
                            <FilterEle color="Eletrônicos para Quarto"/>
                            <FilterEle color="Eletrônicos para Banheiro"/>
                        </Filter>
                        <Filter>
                            <FilterSize>
                                <FilterSizeOption>LG</FilterSizeOption>
                                <FilterSizeOption>SAMSUNG</FilterSizeOption>
                                <FilterSizeOption>AOC ROKU</FilterSizeOption>
                                <FilterSizeOption>PHILCO</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADICIONAR AO CARRINHO</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newletter />
            <Footer />
        </Container>
    )
}

export default Product
