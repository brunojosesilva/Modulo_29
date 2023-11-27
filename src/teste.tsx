import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string // sinal ? deixa o campo como opicional
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <div>Ola</div>
      <Botao fontSize="18px" principal>
        Cancelar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Enviar
      </Botao>
      <BotaoPerigo principal>Nao click</BotaoPerigo>
    </>
  )
}

export default Teste
