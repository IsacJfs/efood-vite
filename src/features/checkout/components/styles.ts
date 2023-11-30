import styled from "styled-components";
import { buttonMediumCSS, colors } from "../../../assets/styles";

export const AddressContainer = styled.div`
  color: ${colors.witeMedium};
  font-weight: bold;

  h3 {
    font-size: 16px;
    padding-bottom: 16px;
  }

  form {

    > div {
      margin-bottom: 24px;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      row-gap: 8px;
    }
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  font-size: 14px;
  label {
  }

  input {
    background-color: ${colors.pinkMedium};
    border: 1px solid ${colors.pinkMedium};
    padding: 8px;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;

    &.error {
      border: 1px solid red;
    }
  }
`

export const MultiField = styled(InputContainer)`
  flex-direction: row;
  column-gap: 34px;
  width: 100%;
  padding: 0;

  label {
    max-width: 155px;
  }

  input {
    max-width: 155px;
  }
`

export const ButtonForm = styled.button`
  ${buttonMediumCSS}
  width: 100%;
  margin-bottom: 8px;
`
