const accountBookData = [
  {
    id: 1,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
  {
    id: 2,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
  {
    id: 3,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
  {
    id: 4,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
  {
    id: 5,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
  {
    id: 6,
    date: '2021/08/01',
    category: '昼食',
    item: 'お弁当',
    money: 480,
  },
];

const assets = {
  wallet: 15000,
  bank: 450000,
  stock: 120000,
};

const budGet = 50000

export function getAccountBookData(){
  return accountBookData
}

export function getAssets(){
  return assets
}

export function getBudGet(){
  return budGet
}
