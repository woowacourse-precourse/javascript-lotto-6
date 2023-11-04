const message = Object.freeze({
  prefix: '[ERROR]',
  // 공통
  invalidInput: '공백을 입력하셨습니다.',
  invalidEmpty: '빈 문자열은 허용되지 않습니다.',

  // 구매 가격 입력
  invalidUnit: '1,000원 단위로 입력해주세요.',

  // 로또 번호 입력 winningNumbers
  invalidNumberRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidNumberLimit: '로또 번호는 6개여야 합니다.',
  invalidPurchase: '구매 가격에 문자열이 포함되어 있습니다. 숫자만 입력해주세요.',
  duplicateNumber: '중복된 숫자가 있습니다. 6개의 서로 다른 숫자를 입력해주세요.',
  noZero: '0은 허용되지 않습니다.',

  // 보너스 번호 입력 bonusNumber
  invalidBonusNumberLimit: '1개의 보너스 번호를 입력해주세요.',
  duplicateBonusNumber: '보너스 번호가 중복됩니다. 다른 번호를 입력해주세요.',
});

const ERROR = Object.freeze({ message });

export default ERROR;
