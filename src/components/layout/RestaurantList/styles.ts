import styled from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 768px) {
    display: block;
  }
`
