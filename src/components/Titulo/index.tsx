import { Titulo as TituloEstilo } from './styles';
// Titulo é a const no .styles que armazena styled.h3, porém tb é o nome
// do component, logo fazemos a importação com um alias (as TituloEstilo)

// tipando a prop children como string
export type Props = {
  children: string;
  fontSize?: number
}

const Titulo = (props: Props) => (
<TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
