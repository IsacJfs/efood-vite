import { useState } from 'react'
import { Description } from '../../../assets/styles'
import {
  Restaurants,
  MenuItem as MenuItemType
} from '../../../models/Restaurant'
import close from '../../../assets/images/close 1.svg'
import * as S from './styles'

type Props = {
  restaurants: Restaurants
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuItem = ({
  item,
  onClick
}: {
  item: MenuItemType
  onClick: () => void
}) => (
  <S.Card>
    <S.CardHeader>
      <S.imageMenu src={item.foto} alt={item.nome} />
      <S.Name>{item.nome}</S.Name>
    </S.CardHeader>
    <Description>{item.descricao}</Description>
    <S.Button type='button' onClick={onClick}>
      Saiba Mais
    </S.Button>
  </S.Card>
)

const Modal = ({
  item,
  onClose
}: {
  item: MenuItemType
  onClose: () => void
}) => (
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
        <S.Button type="button">
          Adicionar ao carrinho - {formataPreco(item.preco)}
        </S.Button>
      </S.ModalContent>
    </S.ModalCard>
    <div className="overlay" onClick={onClose}></div>
  </S.Modal>
)

const RestaurantMenu = ({ restaurants }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null)

  const openModal = (item: MenuItemType) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <S.Menu>
        <S.CardContainer className="container">
          {restaurants.cardapio.map((menu) => (
            <MenuItem
              key={menu.id}
              item={menu}
              onClick={() => openModal(menu)}
            />
          ))}
        </S.CardContainer>
      </S.Menu>
      {isModalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} />
      )}
    </>
  )
}

export default RestaurantMenu
