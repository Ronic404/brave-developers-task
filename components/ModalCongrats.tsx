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
`;

export default function ({ open, onClose }: IModal) {
  const modalBody = (
    <ModalDiv>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </ModalDiv>
  );

  return (
    <Modal open={open} onClose={onClose}>{modalBody}</Modal>
  );
}
