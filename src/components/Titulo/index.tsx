import { Titulo as TituloEstilo } from './styles'

export type PropsParm = {
  children: string
  fontSize?: number
}

const Titulo = (props: PropsParm) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
