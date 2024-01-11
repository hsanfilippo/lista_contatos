import * as S from './styles'

const Contato = () => {
  return (
    <>
      <S.ImageContainer>
        <img src="http://via.placeholder.com/350x350" />
      </S.ImageContainer>
      <S.ContainerInfo>
        <S.Name>
          Trevor Phillips <br />
          &quot;TP Industries&quot;
        </S.Name>
        <S.Email>email_exemplo_1234@loremteste.com</S.Email>
        <S.Tel>+55 11 91234-5678</S.Tel>
        <div className="button-area">
          <S.ButtonEdit>Editar</S.ButtonEdit>
          <S.ButtonRemove>Excluir Contato</S.ButtonRemove>
        </div>
      </S.ContainerInfo>
    </>
  )
}

export default Contato
