const BUY_LOTTO = "구맥 금액을 입력해주세요.";

const LOTTO_COUNT = (count) => `${count}개를 구매했습니다.`;

const PRINT_PURCHASE_LOTTO = (lottoContainer) => {
  let str = "";
  lottoContainer.forEach((v) =>{
    str += `[${v.get().join(", ")}]\n`
  });
  return str;
}

export {
  BUY_LOTTO, 
  LOTTO_COUNT,
  PRINT_PURCHASE_LOTTO
}