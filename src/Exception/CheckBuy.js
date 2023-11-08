// 기능1 예외조건
export function checkbuy(buyinput) {
  if (parseInt(buyinput) % 1000 !== 0 || buyinput === '0' || isNaN(buyinput)) {
    throw new Error('[ERROR] 금액은 1000원 단위의 숫자로 입력해야합니다.');
  }
  return parseInt(buyinput) / 1000;
}
