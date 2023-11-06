const INPUT_QUERY = {
  lottoMoney: "구입금액을 입력해 주세요." + "\n",
  lottoAnswer: "당첨 번호를 입력해 주세요." + "\n",
  bonusNumber: "보너스 번호를 입력해 주세요." + "\n",
};

const errorString = (string) => `[ERROR] ${string}`;
const ERROR_MESSAGE = {
  notPostiveInt: errorString("값이 양의 정수가 아닙니다."),
  undividableByThousand: errorString("값이 1000으로 나누어 떨어지는 값이 아닙니다."),

  overLottoStock: errorString("남아있는 로또의 재고 수를 초과하여 구매할 수 없습니다."),
};

export { INPUT_QUERY, ERROR_MESSAGE };
