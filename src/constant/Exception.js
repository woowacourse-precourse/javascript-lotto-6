const ERRORMESAGE = '[ERROR]';
const EXCEPTION = {
  inValidAmountError: `${ERRORMESAGE} 구입 금액은 1,000원 단위로 입력해주세요.`,
  amountIsZeroError: `${ERRORMESAGE} 구입 금액은 1,000원부터 입력 가능합니다.`,
  nonNumericInputError: `${ERRORMESAGE} 문자는 포함될 수 없습니다.`,
  nonNumberError: `${ERRORMESAGE} 숫자만 입력해주세요`,
  lottoLengthError: `${ERRORMESAGE} 6개의 로또 번호를 입력해주세요.`,
  duplicateError: `${ERRORMESAGE} 로또 번호는 중복될 수 없습니다.`,
  outOfRangeError: `${ERRORMESAGE} 로또 번호는 1~45 범위 내에 포함되어야합니다.`,
  specialCharacterError: `${ERRORMESAGE} 쉼표 외 문자는 포함될 수 없습니다.`,
  bonusWinningSameError: `${ERRORMESAGE} 보너스번호는 당첨번호와 같을 수 없습니다.`,
};

export default EXCEPTION;
