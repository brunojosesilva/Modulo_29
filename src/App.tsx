import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaTemaDark, setTemaDark] = useState(false)

  function trocaTema() {
    setTemaDark(!estaTemaDark)
  }

  return (
    <ThemeProvider theme={estaTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
