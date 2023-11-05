const UNIT = 3;

const addMoneyDelimiter = (money) => {
  const moneyStr = money.toString().split('').reverse();
  const result = [];

  for (let i = 0; i < moneyStr.length; i += 1) {
    if (i !== 0 && i % UNIT === 0) result.push(',');
    result.push(moneyStr[i]);
  }

  return result.reverse().join('');
};

export default addMoneyDelimiter;
