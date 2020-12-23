const K = {
  value: 1000,
  symbol: 'K'
};

const M = {
  value: 1000000,
  symbol: 'M'
};

const B = {
  value: 1000000000,
  symbol: '🔥'
};

const fixLength = (value: string, length: number = 4): string => {
  return value.concat(' '.repeat(length - value.length));
};

export const formatStatistic = (value: number): string => {
  let formated = '';
  if(value < K.value){
    formated = String(value);
  }else if(value < M.value) {
    formated = (Math.round(value / K.value) + K.symbol);
  }else if (value < B.value) {
    formated = (Math.round(value / M.value) + M.symbol);
  }else{
    formated = B.symbol;
  }

  return fixLength(formated);
};
