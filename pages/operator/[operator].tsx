/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  TextField, InputAdornment, Button, CircularProgress,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import {
  useState, ChangeEvent, useEffect,
} from 'react';

import MainLayout from '../../components/MainLayout';
import Modal from '../../components/ModalCongrats';
import Title from '../../components/Title';

import phoneNumberMask from '../../helpers/phoneNumberMask';
import isComplete from '../../helpers/isComplete';

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: space-around;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface State {
  phoneNumber: string;
  sum: string;
}

export default function MobileOperator() {
  const router = useRouter();

  const [isCorrectValues, setIsCorrectValues] = useState({
    isPhone: false,
    isSum: false,
  });

  const [values, setValues] = useState<State>({
    phoneNumber: '',
    sum: '',
  });

  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    document.querySelector('#sum-helper-text').textContent = '';
  }, []);

  useEffect(() => {
    if (values.phoneNumber.match(/8 \(\d{3}\) \d{3}-\d{4}/) && values.sum.match(/\d+/)) {
      setIsCorrectValues((prev) => ({ ...prev, isPhone: true }));
    } else {
      setIsCorrectValues((prev) => ({ ...prev, isPhone: false }));
    }
  }, [values]);

  useEffect(() => {
    if (isCorrectValues.isPhone === true && isCorrectValues.isSum === true) {
      document.querySelector('.pay-button').classList.remove('Mui-disabled');
    } else {
      document.querySelector('.pay-button').classList.add('Mui-disabled');
    }
  }, [isCorrectValues]);

  const phoneNumberChange = (event) => {
    setValues({
      ...values,
      phoneNumber: event.target.value,
    });
  };

  const sumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      sum: event.target.value,
    });

    if (!event.target.value) {
      return;
    }

    if (+event.target.value <= 0 || +event.target.value > 1000) {
      document.querySelector('#sum-helper-text').textContent = 'Сумма должна быть от 1 до 1000';
      setIsCorrectValues((prev) => ({ ...prev, isSum: false }));
    } else {
      document.querySelector('#sum-helper-text').textContent = '';
      setIsCorrectValues((prev) => ({ ...prev, isSum: true }));
    }
  };

  const [open, setOpen] = useState(false);

  const openModal = async () => {
    setIsLoader(true);
    if (await isComplete()) {
      setOpen(true);
    } else {
      global.alert('Try again');
    }
    setIsLoader(false);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <MainLayout title={router.query.operator}>
      <Payment>
        <Title text={router.query.operator} />
        {isLoader && <CircularProgress style={{ margin: 'auto' }} />}
        <Form>
          <TextField
            autoComplete="off"
            id="phone-number"
            label="Номер телефона"
            variant="outlined"
            helperText="Например: 8 (123) 456-7890"
            onChange={phoneNumberChange}
            InputProps={{
              inputComponent: phoneNumberMask,
            }}
          />
          <TextField
            autoComplete="off"
            id="sum"
            label="Сумма"
            variant="outlined"
            type="number"
            helperText="Сумма должна быть от 1 до 1000"
            onChange={sumChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">₽</InputAdornment>,
              inputProps: { min: 0, max: 1000 },
            }}
          />
        </Form>
        <Button className="pay-button" type="button" onClick={openModal}>Оплатить</Button>
        <Modal open={open} onClose={closeModal} />
        <Link href="/" passHref><Button variant="contained" color="primary">Назад</Button></Link>
      </Payment>
    </MainLayout>
  );
}

// export async function getServerSideProps(ctx) {
//   return {
//     props: {
//       data: ctx.req.headers.cookie,
//     },
//   };
// }
