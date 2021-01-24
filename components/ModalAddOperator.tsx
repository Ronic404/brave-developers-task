/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Modal } from '@material-ui/core';
import styled from 'styled-components';

interface IModal {
  open: boolean
  onClose: () => void
  add: (value: string) => void
}

const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  font-size: 1.5rem;

  @media(max-width: 768px) {
    width: 50vw;
  }

  @media(max-width: 425px) {
    width: 80vw;
  }
`;

export default function ({ open, onClose, add }: IModal) {
  const handler = (event) => {
    if (event.charCode === 13) {
      add(event.target.value);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDiv>
        <p style={{ color: 'white', textAlign: 'center' }}>Enter new operator</p>
        <input type="text" autoFocus onKeyPress={handler} style={{ width: '100%', fontSize: '1.5rem' }} />
      </ModalDiv>
    </Modal>
  );
}
