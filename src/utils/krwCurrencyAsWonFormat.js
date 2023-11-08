import paramType from '../lib/paramType/src/paramType.js';

const krwCurrencyAsWonFormat = (money, _ = paramType(money, 'number')) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'krw',
    currencyDisplay: 'name',
  })
    .format(money)
    .replace(' 대한민국 ', '');
};

export default krwCurrencyAsWonFormat;
