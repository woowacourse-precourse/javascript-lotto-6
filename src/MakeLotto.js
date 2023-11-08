import { Console, Random } from "@woowacourse/mission-utils";

// 랜덤 로또 번호 생성
function makeLotto() {
  const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  randomLotto.sort((a, b) => a - b);
  return randomLotto;
}

// 랜덤 로또 번호 출력과 저장
export function printLotto(numLotto) {
  Console.print(String(numLotto) + "개를 구매했습니다.")
  const randomLottoArr = []
  for (let i = 0; i < numLotto; i++) {
    const lottoNumbers = makeLotto();
    Console.print("[" + lottoNumbers.join(", ") + "]");
    randomLottoArr.push(lottoNumbers);
  }
  Console.print("");
  return randomLottoArr;
}