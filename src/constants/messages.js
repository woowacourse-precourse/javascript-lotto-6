const messages = {
  purchase: {
    request: '구입금액을 입력해 주세요.',
    complete: '개를 구매했습니다.',
  },
  number: {
    winning: '당첨 번호를 입력해 주세요.',
    bonus: '보너스 번호를 입력해 주세요.',
  },
  statics: {
    headline: '당첨 통계',
    seperator: '---',
  },
  error: {
    invalidAmount: '[ERROR] 금액은 1000 단위의 숫자여야 합니다.',
    invalidCount: '[ERROR] 로또 번호는 6개여야 합니다.',
    invalidNumber: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    duplicate: '[ERROR] 숫자는 중복해서 입력할 수 없습니다.',
  },
};

export default messages;
