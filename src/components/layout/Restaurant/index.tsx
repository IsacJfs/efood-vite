import React from 'react'
import estrela from '../../../assets/images/star_favorite.svg'
import * as S from './styles'
import { Description } from '../../../assets/styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
}

const Restaurant = React.memo(
  ({ titulo, destacado, id, avaliacao, descricao, capa, tipo }: Props) => {
    return (
      <S.Card>
        <S.Image src={capa} alt={titulo} />
        <S.Body>
          <div>
            <S.Head>
              <p>{titulo}</p>
              <S.Head>
                <p>{avaliacao}</p>
                <img src={estrela} alt="Estrela" />
              </S.Head>
            </S.Head>
            <Description>
              <p>{descricao}</p>
            </Description>
            <S.TagContainer>
              {destacado ? (
                <S.Tag className="destaque">Destaque da semana</S.Tag>
              ) : (
                ''
              )}
              <S.Tag>{tipo}</S.Tag>
            </S.TagContainer>
            <S.Button title="Saiba mais" to={`/restaurantes/${id}`}>
              Saiba mais
            </S.Button>
          </div>
        </S.Body>
      </S.Card>
    )
  }
)

Restaurant.displayName = 'Restaurant'

export default Restaurant
