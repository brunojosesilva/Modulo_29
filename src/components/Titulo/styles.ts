import styled from 'styled-components'

import { PropsParm } from '.'

export const Titulo = styled.h3<PropsParm>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;
`
