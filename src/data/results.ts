export interface ResultItem {
  id: string;
  name: string;
  loss: string;
  duration: string;
  image: string;
}

export const results: ResultItem[] = [
  {
    id: 'result-1',
    name: 'MAIKELINE',
    loss: '-14KG',
    duration: '4 MESES',
    image: '/assets/resultado_1.jpg',
  },
  {
    id: 'result-2',
    name: 'GABRIEL MEIRELLES',
    loss: '-20KG',
    duration: '6 MESES',
    image: '/assets/resultado_2.jpg',
  },
  {
    id: 'result-3',
    name: 'RESULTADO REAL',
    loss: '-18KG',
    duration: '5 MESES',
    image: '/assets/resultado_3.jpg',
  },
];