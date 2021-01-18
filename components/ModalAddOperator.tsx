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
  background: yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 30vh;
`;

export default function ({ open, onClose, add }: IModal) {
  const ooo = (event) => {
    if (event.charCode === 13) {
      add(event.target.value);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDiv>
        <input type="text" onKeyPress={ooo} />
      </ModalDiv>
    </Modal>
  );
}
