import styled from 'styled-components'

import { PropsParm } from '.'

export const P = styled.p<PropsParm>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
