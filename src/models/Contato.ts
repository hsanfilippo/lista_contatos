class Contato {
  nome: string
  apelido?: string
  email?: string
  tel?: string
  id: number

  constructor(
    nome: string,
    apelido: string,
    email: string,
    tel: string,
    id: number
  ) {
    this.nome = nome
    this.apelido = apelido
    this.email = email
    this.tel = tel
    this.id = id
  }
}

export default Contato
