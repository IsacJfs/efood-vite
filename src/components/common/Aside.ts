import styled from "styled-components";
import { colors } from "../../assets/styles";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.pinkDark};
  padding: 32px 8px 0 8px;
  z-index: 1;
`
