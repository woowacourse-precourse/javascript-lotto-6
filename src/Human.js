import { MissionUtils } from "@woowacourse/mission-utils";

export async function getPayment() {
  const payment = await MissionUtils.Console.readLineAsync(
    "구입금액을 입력해 주세요.\n",
  );

  if (
    isNaN(Number(payment)) ||
    payment < 0 ||
    !Number.isInteger(Number(payment) / 1000)
  ) {
    MissionUtils.Console.print("[ERROR] 1000원 단위로 입력해주세요");
    await getPayment();
  }

  return payment / 1000;
}

export function purchaseLotto(lottoQuantity) {
  const purchasedLottos = [];
  MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

  for (let i = 0; i < lottoQuantity; i++) {
    let lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    lotto = lotto.sort((a, b) => a - b);
    MissionUtils.Console.print("[" + lotto.join(", ") + "]");
    // 질문사항: jest 에서 스트링 값을 요구해서 어쩔수 없이 이렇게 씀
    purchasedLottos.push(lotto);
  }

  return purchasedLottos;
}

export function countLotto(purchasedLottos, number) {}
