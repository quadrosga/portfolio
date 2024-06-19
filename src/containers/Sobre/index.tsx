import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
          <Titulo fontSize={16}>Sobre mim</Titulo>
          <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, earum perferendis quisquam distinctio consectetur assumenda voluptatum dolore dolor quibusdam voluptate, voluptatibus aliquam libero ullam? Sapiente odio doloremque et nobis adipisci!
          </Paragrafo>
          <GithubSecao>
          <img src="https://github-readme-stats.vercel.app/api?username=quadrosga&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=quadrosga&layout=compact&langs_count=7&theme=dracula"/>
          </GithubSecao>
  </section>
)

export default Sobre
