const ERROR_HEADER = '[ERROR]';

const ERROR = {
  purchaseIsNumber: `${ERROR_HEADER} 구입 금액은 숫자여야 합니다.`,
  purchaseMinNumber: `${ERROR_HEADER} 구입 금액은 최소 1000원 이상이어야 합니다.`,
  purchaseThousands: `${ERROR_HEADER} 구입 금액은 1000원 단위여야 합니다.`,

  lottoIsNotDuplicate: `${ERROR_HEADER} 로또 번호는 중복될 수 없습니다`,
  lottoIsNumber: `${ERROR_HEADER} 로또 번호는 숫자여야 합니다.`,
  lottoRange: `${ERROR_HEADER} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  lottoContainComma: `${ERROR_HEADER} 로또 번호는 쉼표(,)를 기준으로 구분해야 합니다.`,
};
Object.freeze(ERROR);

export default ERROR;
