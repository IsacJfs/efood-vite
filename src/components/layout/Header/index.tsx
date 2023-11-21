import * as S from './styles'
import logo from '../../../assets/images/logo.svg'

const Header = () => (
  <S.Header>
    <S.Logo>
      <img src={logo} alt="logo-efood" />
    </S.Logo>
    <S.Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </S.Title>
  </S.Header>
)

export default Header
