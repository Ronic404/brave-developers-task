/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import MaskedInput from 'react-text-mask';

interface IArgs {
  other: object
}

export default function phoneNumberMask({ ...other }: IArgs) {
  return (
    <MaskedInput
      {...other}
      mask={[/8/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}
