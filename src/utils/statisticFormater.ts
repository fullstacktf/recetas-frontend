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

const fixDecimals = (value: number, decimals: number = 2): number => {
  return Math.round((value + Number.EPSILON) * (10 * decimals)) / (10 * decimals);


};

export const formatStatistic = (value: number): string => {
  let formated = '';
  if(value < K.value){
    formated = String(value);
  }else if(value < M.value) {
    formated = (fixDecimals(value / K.value) + K.symbol);
  }else if (value < B.value) {
    formated = (fixDecimals(value / M.value) + M.symbol);
  }else{
    formated = B.symbol;
  }

  return formated;
};
