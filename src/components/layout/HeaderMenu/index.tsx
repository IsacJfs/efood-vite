import * as S from './styles'
import logo from '../../../assets/images/logo.svg'

const HeaderMenu = () => (
  <S.BgHeader>
    <S.Header className="container">
      <S.HeaderLinks href="/">Restaurantes</S.HeaderLinks>
      <S.Logo>
        <img src={logo} alt="logo-efood" />
      </S.Logo>
      <S.HeaderCarrinho href="/carrinho">
        <span>0</span>produto(s) no carrinho
      </S.HeaderCarrinho>
    </S.Header>
  </S.BgHeader>
)

export default HeaderMenu
