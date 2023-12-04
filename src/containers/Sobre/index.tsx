import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'

import { GitHubImg } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste deleniti
      illum beatae delectus quod amet velit facilis perferendis, ex cumque
      pariatur! Beatae molestias cum ducimus. Quos impedit nesciunt consequuntur
      nisi?
    </Paragrafo>
    <GitHubImg>
      <img src="https://github-readme-stats.vercel.app/api?username=brunojosesilva&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=brunojosesilva&layout=compact&langs_count=7&theme=dracula" />
    </GitHubImg>
  </section>
)

export default Sobre
