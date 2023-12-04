import { P } from './styles'

export type PropsParm = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: PropsParm) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragrafo
