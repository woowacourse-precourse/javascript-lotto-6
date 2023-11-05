import PRIZES from '../constant/Prizes.js';

const calcTotalIncome = (result) => {
  return result.reduce((sum, count, i) => {
    return (sum += PRIZES[i] * count);
  }, 0);
};

export default calcTotalIncome;
