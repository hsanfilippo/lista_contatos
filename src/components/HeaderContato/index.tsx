import * as S from "./styles"

const HeaderContato = () => {
    return (
        <>
        <S.NavBar>
            <S.Button>&lt; Voltar</S.Button>
        </S.NavBar>
        <S.Image src="http://via.placeholder.com/350x350" />
        <div>
            <p>Nome e Sobrenome</p>
            <p>email_exemplo@lorem.com</p>
            <p>+55 11 91234-5678</p>
            <div>
                <button>Editar</button>
                <button>Excluir Contato</button>
            </div>
        </div>
        </>
    )
}

export default HeaderContato