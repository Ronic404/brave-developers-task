import styled from 'styled-components';

const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  color: lightcoral;
  line-height: 1.3;
`;

export default function title({ text }) {
  return (
    <Title>{text}</Title>
  );
}
