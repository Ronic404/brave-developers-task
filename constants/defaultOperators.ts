interface IOperator {
  id: number
  name: string
}

const defaultOperators: IOperator[] = [
  {
    id: 1,
    name: 'MTS',
  },
  {
    id: 2,
    name: 'Beeline',
  },
  {
    id: 3,
    name: 'Megafon',
  },
];

export default defaultOperators;
