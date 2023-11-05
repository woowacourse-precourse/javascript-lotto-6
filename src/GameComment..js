const BUY_LOTTO = "구맥 금액을 입력해주세요.";

const LOTTO_COUNT = (count) => `${count}개를 구매했습니다.`;

const PRINT_PURCHASE_LOTTO = (lottoContainer) => {
  let str = "";
  lottoContainer.forEach((v) =>{
    str += `[${v.get().join(", ")}]\n`
  });
  return str;
}

const WINNING_OUTCOME = (arr) => {
  return `3개 일치 (5,000원) - ${arr[0]}개\n
  4개 일치 (50,000원) - ${arr[1]}개\n
  5개 일치 (1,500,000원) - ${arr[2]}개\n
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${arr[3]}개\n
  6개 일치 (2,000,000,000원) - ${arr[4]}개\n`
}

export {
  BUY_LOTTO, 
  LOTTO_COUNT,
  PRINT_PURCHASE_LOTTO,
  WINNING_OUTCOME
}