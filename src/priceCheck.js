export default function priceCheck(price) {
  if (isNaN(Number(price))) {
    throw new Error('[ERROR] : 단위는 1000단위로 입력해야합니다.');
  }
  if (Number(price) % 1000 !== 0) {
    throw new Error('[ERROR] : 단위는 1000단위로 입력해야합니다.');
  }

  return Number(price) / 1000;
}
