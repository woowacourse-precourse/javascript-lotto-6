const ERROR_MESSAGES = {
  lottoNumbers: {
    length: '[ERROR] 로또 번호는 6개여야 합니다.',
    isntNumber: '[ERROR] 로또 번호는 숫자여야 합니다.',
    isntInteger: '[ERROR] 로또 번호는 정수여야 합니다.',
    outOfRange: '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
    duplicated: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  },

  paymentAmount: {
    isntNumber: '[ERROR] 구입 금액은 숫자여야 합니다.',
    isntInteger: '[ERROR] 구입 금액은 정수여야 합니다.',
    outOfUnit: '[ERROR] 구입 금액은 1000원 단위여야 합니다.',
  },

  winningNumbers: {
    length: '[ERROR] 당첨 번호는 6개여야 합니다.',
    isntNumber: '[ERROR] 당첨 번호는 숫자여야 합니다.',
    isntInteger: '[ERROR] 당첨 번호는 정수여야 합니다.',
    outOfRange: '[ERROR] 당첨 번호는 1~45 사이여야 합니다.',
    duplicated: '[ERROR] 당첨 번호는 중복될 수 없습니다.',
  },

  bonusNumber: {
    isntNumber: '[ERROR] 보너스 번호는 숫자여야 합니다.',
    isntInteger: '[ERROR] 보너스 번호는 정수여야 합니다.',
    outOfRange: '[ERROR] 보너스 번호는 1~45 사이여야 합니다.',
    duplicated: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  },
};

export default ERROR_MESSAGES;
