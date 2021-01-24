/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { Add, HighlightOff } from '@material-ui/icons';
import cookie from 'js-cookie';

import MainLayout from '../components/MainLayout';
import Modal from '../components/ModalAddOperator';
import Title from '../components/Title';

import defaultOperators from '../constants/defaultOperators';

const List = styled.ul`
  padding: 1em;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Anchor = styled.a`
  color: #4c00ff;
  opacity: 0.8;
  font-size: 1.5rem;

  :hover {
    opacity: 1;
  }
`;

interface IOperator {
  id: number
  name: string
}

export default function Index() {
  const [allOperators, setAllOperators] = useState<IOperator[]>(defaultOperators);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addOperator = (value) => {
    setAllOperators([
      ...cookie.getJSON('operators'),
      {
        id: Date.now(),
        name: value,
      },
    ]);
  };

  const deleteOperator = (event) => {
    setAllOperators(cookie.getJSON('operators')
      .filter((el) => el.name !== event.target.closest('.item').innerText));
  };

  useEffect(() => {
    setAllOperators(cookie.getJSON('operators'));
  }, []);

  useEffect(() => {
    cookie.set('operators', JSON.stringify(allOperators));
  }, [allOperators]);

  return (
    <MainLayout>
      <Title text="Choose the mobile oparator:" />
      <List>
        {allOperators.map((operator) => (
          <Item key={operator.id} className="item">
            <Link href={`/operator/${operator.name}`}>
              <Anchor>{operator.name}</Anchor>
            </Link>
            <Fab size="small" color="secondary" aria-label="add" onClick={deleteOperator}>
              <HighlightOff />
            </Fab>
          </Item>
        ))}
      </List>
      <Fab size="small" color="primary" aria-label="delete" onClick={openModal}>
        <Add />
      </Fab>
      <Modal open={open} onClose={closeModal} add={addOperator} />
    </MainLayout>
  );
}
