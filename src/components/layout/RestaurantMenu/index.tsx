import { useState } from 'react'
import { Description } from '../../../assets/styles'
import {
  Restaurants,
  MenuItem as MenuItemType
} from '../../../models/Restaurant'
import * as S from './styles'
import Modal from '../Modal'

type Props = {
  restaurants: Restaurants
}

export const formataPreco = (preco = 0) => {
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

const ModalContent = ({
  item,
  onClose
}: {
  item: MenuItemType
  onClose: () => void
}) => (
  <Modal item={item} onClose={onClose} />
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
        <ModalContent item={selectedItem} onClose={closeModal} />
      )}
    </>
  )
}

export default RestaurantMenu
