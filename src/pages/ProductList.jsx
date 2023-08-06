import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newletter from "../components/Newletter"
import Footer from "../components/Footer"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>ELETRÔNICOS</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filtrar Produtos:
                    </FilterText>
                    <Select>
                        <Option disable selected>
                            Eletrônicos
                        </Option>
                        <Option>Eletrônicos para Sala</Option>
                        <Option>Eletrônicos para Cozinha</Option>
                        <Option>Eletrônicos para Quarto</Option>
                        <Option>Eletrônicos para Banheiro</Option>
                    </Select>
                    <Select>
                        <Option disable selected>
                            Televisores
                        </Option>
                        <Option>Televisores LG</Option>
                        <Option>Televisores Samsung</Option>
                        <Option>Televisores AOC Roku</Option>
                        <Option>Televisores Philco</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Produtos Aleatórios:
                    </FilterText>
                    <Select>
                        <Option selected>O mais novo</Option>
                        <Option>Preço (Maior)</Option>
                        <Option>Preço (Menor)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newletter />
            <Footer />
        </Container>
    )
}

export default ProductList
