import { Modal } from '@material-ui/core';
import styled from 'styled-components';

interface IModal {
  open: boolean
  onClose: () => void
}

const ModalDiv = styled.div`
  background: yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 50vw;
  }

  @media(max-width: 425px) {
    width: 80vw;
  }
`;

export default function ({ open, onClose }: IModal) {
  const modalBody = (
    <ModalDiv>
      <h2 id="simple-modal-title">Congratulations!</h2>
      <p id="simple-modal-description">
        You have topped up your account.
      </p>
    </ModalDiv>
  );

  return (
    <Modal open={open} onClose={onClose}>{modalBody}</Modal>
  );
}
