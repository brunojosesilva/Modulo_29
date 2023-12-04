import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/styles'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
