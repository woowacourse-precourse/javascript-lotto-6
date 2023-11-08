const ERROR_FLAG = '[ERROR]';

const EXCEPTION_MESSAGE = Object.freeze({
  priceFormat: `${ERROR_FLAG} 구매 금액은 반드시 1,000원 단위의 숫자로만 입력하셔야 합니다.`,
  priceStartsWithZero: `${ERROR_FLAG} 구매 금액은 반드시 0이 아닌 숫자로 시작되어야 합니다.`,
  lottoNumbersLength: `${ERROR_FLAG} 로또에 포함된 번호는 총 6개여야 합니다.`,
  lottoNumberIsDuplicated: `${ERROR_FLAG} 로또에 포함된 번호는 서로 중복되지 않아야 합니다.`,
  lottoNumberFormat: `${ERROR_FLAG} 로또에 포함된 번호는 1~45 사이의 숫자만 허용됩니다.`,
  lottoNumberIsNotSorted: `${ERROR_FLAG} 로또에 포함된 번호는 순차정렬 되어야 합니다.`,
  winningNumberLength: `${ERROR_FLAG} 전체 당첨 번호는 '1,2,3,4,5,6' 과 같이 6개의 숫자가 쉼표로 이어진 형태로 입력하셔야 합니다.`,
  winningNumberFormat: `${ERROR_FLAG} 각각의 당첨 번호에는 1~45 사이의 숫자만 허용됩니다.`,
  winningNumberIsDuplicated: `${ERROR_FLAG} 각각의 당첨 번호는 서로 중복되지 않아야 합니다.`,
  bonusNumberFormat: `${ERROR_FLAG} 보너스 번호는 1~45 사이의 숫자만 허용됩니다.`,
  bonusNumberIsDuplicated: `${ERROR_FLAG} 보너스 번호는 앞서 입력하신 당첨 번호들과 중복되지 않아야 합니다.`,
});

export { EXCEPTION_MESSAGE };
