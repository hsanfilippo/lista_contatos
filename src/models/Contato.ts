class Contato {
  nome?: string
  apelido?: string
  email?: string
  tel?: number
  idtask?: number

  constructor(
    nome: string,
    apelido: string,
    email: string,
    tel: number,
    idtask: number
  ) {
    this.nome = nome
    this.apelido = apelido
    this.email = email
    this.tel = tel
    this.idtask = idtask
  }
}

export default Contato
