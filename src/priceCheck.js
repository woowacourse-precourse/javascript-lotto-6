export default function priceCheck(price) {
  const parsedPrice = parseInt(price, 10);

  if (isNaN(parsedPrice) || parsedPrice % 1000 !== 0) {
    throw new Error('[ERROR] : 단위는 1000단위로 입력해야합니다.');
  }

  return parsedPrice / 1000;
}
