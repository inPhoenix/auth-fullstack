import styled from "styled-components"

interface IMyImageProps {
  back?: string,
}

const LoginContainer = styled.div<IMyImageProps>`
  background-color: darkgrey;
  display: flex;
  justify-content: flex-start;
  background: #2c3338;
  color: #606468;
  height: 100vh;
  flex: 1;
  background: linear-gradient(rgba(35,39,72,0.9), rgba(35,39,72,0.4)), url(${props => props.back});
  background-repeat: no-repeat;
  background-color: black;
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
  height: 100vh;
`

export { LoginContainer }
