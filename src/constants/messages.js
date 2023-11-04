const INPUT_QUERY = {
  lottoMoney: "구입금액을 입력해 주세요." + "\n",
};

const errorString = (string) => `[ERROR] ${string}`;
const ERROR_MESSAGE = {
  notPostiveInt: errorString("값이 양의 정수가 아닙니다."),
};

export { INPUT_QUERY, ERROR_MESSAGE };
