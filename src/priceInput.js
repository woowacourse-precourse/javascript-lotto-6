import lottoPriceInput from './LottoPriceInput.js';
import priceCheck from './priceCheck.js';

export default async function getValidPrice() {
  let validPrice = null;

  while (validPrice === null) {
    try {
      const price = await lottoPriceInput('구입금액을 입력해 주세요.');
      validPrice = priceCheck(price);
    } catch (error) {
      console.error(error.message);
    }
  }
  return validPrice;
}
