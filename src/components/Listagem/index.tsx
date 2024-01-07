import { ContainerListagem, ItemList, List, ListTitle } from "./styles"

const Listagem = () => {
    return (
        <ContainerListagem>
            <List>
                <ListTitle>A</ListTitle>
                <ItemList>Abner</ItemList>
                <ItemList>Alberto</ItemList>
                <ItemList>Alan</ItemList>
                <ItemList>Ana</ItemList>
                <ItemList>Abner</ItemList>
                <ItemList>Alberto</ItemList>
                <ItemList>Alan</ItemList>
                <ItemList>Ana</ItemList>
            </List>
            <List>
                <ListTitle>B</ListTitle>
                <ItemList>Bianca</ItemList>
                <ItemList>Bernardo</ItemList>
                <ItemList>Bruno</ItemList>
                <ItemList>Biel</ItemList>
            </List>
        </ContainerListagem>
    )
}

export default Listagem