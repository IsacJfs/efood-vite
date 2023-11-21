import * as S from './styles'
import logo from '../../../assets/images/logo.svg'
import instaIcon from '../../../assets/images/insta-vector.svg'
import xIcon from '../../../assets/images/twitter-2-svgrepo-com 1.svg'
import faceIcon from '../../../assets/images/facebook-round-svgrepo-com 1.svg'

const Footer = () => (
  <S.Footer>
    <div>
      <S.Logo>
        <img src={logo} alt="logo-efood" />
      </S.Logo>
      <S.Social>
        <li>
          <a href="">
            <img src={instaIcon} alt="instagram-icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={faceIcon} alt="facebook-icon" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={xIcon} alt="x-icon" />
          </a>
        </li>
      </S.Social>
    </div>
    <S.Caution>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.Caution>
  </S.Footer>
)

export default Footer
