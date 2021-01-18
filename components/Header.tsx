import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 1em 0;
  color: palevioletred;
  background: rgba(173, 188, 230, 0.8);
`;

const ForSEO = styled.h1`
  position: absolute;
  top: -1000px;
`;

const changeColor = keyframes`
  to {
    filter: hue-rotate(360deg);
  }
`;

const moving = keyframes`
  0% {
    transform: translateX(-100%);
  }

  70% {
    transform: translateX(20%);
  }

  85% {
    transform: translateX(-10%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const Title = styled.h2`
  color: palevioletred;
  animation: ${moving} 1s, ${changeColor} 3s infinite ;
`;

export default function header() {
  return (
    <Header>
      <ForSEO>Brave developers</ForSEO>
      <Title>Brave</Title>
    </Header>
  );
}
