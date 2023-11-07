import NUMBER from './number.js';

const cost = {
  unmatchedUnit: `금액은 ${NUMBER.unitCost}원 단위로 입력해야 합니다.`,
};

const number = {
  notNumber: '숫자가 아닌 문자를 입력할 수 없습니다.',
  negativeNumber: '음수를 입력할 수 없습니다. 자연수를 입력해주세요.',
  notInterger: '소수점을 입력할 수 없습니다. 자연수를 입력해주세요.',
};

const lotto = {
  duplication: '로또 번호에 중복된 숫자를 입력할 수 없습니다.',
  includeBlank: '로또 번호에 공백을 입력할 수 없습니다.',
  wrongDrawCases: `로또 번호에 ${NUMBER.drawCases}개의 수를 입력해주세요.`,
  notInRange: `로또 번호는 각각 ${NUMBER.minNumber}에서 ${NUMBER.maxNumber} 사이의 수를 입력해야 합니다.`,
};

const bonus = {
  lottoBonusDuplication: '로또 번호와 보너스 번호는 중복될 수 없습니다.',
  notInRange: `보너스 번호는 각각 ${NUMBER.minNumber}에서 ${NUMBER.maxNumber} 사이의 수를 입력해야 합니다.`,
};

const ERROR = {
  cost,
  number,
  lotto,
  bonus,
};

export default ERROR;
