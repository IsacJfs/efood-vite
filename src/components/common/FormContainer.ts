import styled from 'styled-components'
import { colors, displayFlex } from '../../assets/styles'

type DefMaxWidth = {
  maxWidth?: string
}

export const FormContainer = styled.div<DefMaxWidth>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  flex: auto;

  label {
    display: block;
    font-size: 14px;
  }

  input {
    background-color: ${colors.pinkMedium};
    border: 1px solid ${colors.pinkMedium};
    padding: 8px;
    margin-top: 8px;
    font-weight: bold;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }
`

export const RowField = styled.div`
  ${displayFlex}
  width: 100%;
`
