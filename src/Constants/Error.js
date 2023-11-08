const errorMessages = (messages) => `[ERROR] ${messages}`;

const ERROR = {
  notNumber: errorMessages('숫자를 입력해야 합니다.'),
  lottoMinimumOrder: errorMessages('로또 구입 금액은 최소 1,000원 입니다.'),
  lottoPriceUnit: errorMessages('로또 구입 금액은 1,000원 단위로 입력해야 합니다.'),
  commaWinningNumbers: errorMessages('당첨번호는 쉼표(,)로 구분하여 입력하여야 합니다.'),
  lottoLength: errorMessages('로또 번호는 6개여야 합니다.'),
  lottoDuplicate: errorMessages('로또 번호는 중복되지 않아야 합니다.'),
  lottoNumberRange: errorMessages('로또 번호는 1 ~ 45의 숫자여야합니다.'),
  bonusNumberInWinningNumber: errorMessages('당첨번호와 보너스 번호는 중복되지 않아야 합니다.'),
};

export default ERROR;
