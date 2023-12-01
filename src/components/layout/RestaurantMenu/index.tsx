import { useState } from 'react'
import { Description } from '../../../assets/styles'
import * as S from './styles'
import Modal from '../Modal'

type Props = {
  restaurants: Restaurant
}

const MenuItem = ({ item, onClick }: { item: Menu; onClick: () => void }) => (
  <S.Card>
    <S.CardHeader>
      <S.imageMenu src={item.foto} alt={item.nome} />
      <S.Name>{item.nome}</S.Name>
    </S.CardHeader>
    <Description>{item.descricao}</Description>
    <div>
      <S.Button type="button" title="Adicionar ao carrinho" onClick={onClick}>
        Adicionar ao carrinho
      </S.Button>
    </div>
  </S.Card>
)

const ModalContent = ({
  item,
  onClose
}: {
  item: Menu
  onClose: () => void
}) => <Modal item={item} onClose={onClose} />

const RestaurantMenu = ({ restaurants }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Menu | null>(null)

  const openModal = (item: Menu) => {
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
