import { useDispatch } from 'react-redux'
import * as S from './styles'
import { add, open } from '../../../store/reducers/cart'
import { MenuItem } from '../../../models/Restaurant'
import close from '../../../assets/images/close 1.svg'
import { formataPreco } from '../RestaurantMenu'


const Modal = ( { item, onClose }: { item: MenuItem, onClose: () => void }) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }


  return (
    <S.Modal>
      <S.ModalCard>
        <span>
          <img onClick={onClose} src={close} alt="fechar" />
        </span>
        <img src={item.foto} alt={item.nome} />
        <S.ModalContent>
          <S.Name>{item.nome}</S.Name>
          <div>
            <S.Descricao>{item.descricao}</S.Descricao>
            <br />
            <S.Descricao>Serve: {item.porcao}</S.Descricao>
          </div>
          <S.Button type="button" onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(item.preco)}
          </S.Button>
        </S.ModalContent>
      </S.ModalCard>
      <div className="overlay" onClick={onClose}></div>
    </S.Modal>
  )
}


export default Modal
