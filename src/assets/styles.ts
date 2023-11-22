import styled, { createGlobalStyle, css } from 'styled-components'
import RobotoRegular from './fonts/Roboto-Regular.ttf'
import RobotoBold from './fonts/Roboto-Bold.ttf'
import RobotoThin from './fonts/Roboto-Thin.ttf'
import RobotoBlack from './fonts/Roboto-Black.ttf'

export const colors = {
  pinkLight: '#FFF8F2',
  pinkMedium: '#FFEBD9',
  pinkDark: '#E66767',
  witeMedium: '#FFFFFF',
  yellowStar: '#FFB930'
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: Roboto;
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.pinkLight};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const buttonTagStyle = css`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  background-color: ${colors.pinkDark};
  color: ${colors.pinkMedium};
  padding: 4px 8px;
  cursor: pointer;
  display: inline-block;
  border: none;
`

export const displayFlex = css`
  display: flex;
  justify-content: space-between;
`

export const displayFlexCol = css`
  ${displayFlex}
  flex-direction: column;
`
export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const Description = styled.div`
  line-height: 22px;
  height: 88px;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
`

export default GlobalStyle
