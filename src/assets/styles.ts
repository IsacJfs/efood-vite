import styled, { createGlobalStyle, css } from 'styled-components'
import RobotoRegular from './fonts/Roboto-Regular.ttf'
import RobotoBold from './fonts/Roboto-Bold.ttf'
import RobotoThin from './fonts/Roboto-Thin.ttf'
import RobotoBlack from './fonts/Roboto-Black.ttf'
import RobotoMedium from './fonts/Roboto-Medium.ttf'

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
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
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

const buttonTagStyle = css`
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  font-size: 14px;
  padding: 4px 0;
  height: 24px;
  border: none;
`

export const buttonDarkCSS = css`
  ${buttonTagStyle}
  background-color: ${colors.pinkDark};
  color: ${colors.pinkMedium};
`

export const buttonMediumCSS = css`
  ${buttonTagStyle}
  background-color: ${colors.pinkMedium};
  color: ${colors.pinkDark};
`

export const tagCSS = css`
  ${buttonDarkCSS}
  line-height: 14px;
  font-size: 12px;
  padding: 6px 0;
  height: 26px;
  width: 61px;
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
  background-color: #000;
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
