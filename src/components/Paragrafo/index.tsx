import { P } from './styles'

export type PropsParm = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'principal' }: PropsParm) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
