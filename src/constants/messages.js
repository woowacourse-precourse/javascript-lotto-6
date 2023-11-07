export const MESSAGE = {
  USER: {
    setMoney: '구입금액을 입력해 주세요.\n',
    buyLotto: (number) => `${number}개를 구매했습니다.`,
  },
  LOTTO: {
    setLuckyNumber: '당첨 번호를 입력해 주세요.\n',
    setBonusNumber: '보너스 번호를 입력해 주세요.\n',
  },
  BOARD: {
    'result': '당첨 통계\n---',
    '1th': (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
    '2th': (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
    '3th': (number) => `5개 일치 (1,500,000원) - ${number}개`,
    '4th': (number) => `4개 일치 (50,000원) - ${number}개`,
    '5th': (number) => `3개 일치 (5,000원) - ${number}개`,
    'revenue': (float) => `총 수익률은 ${float}%입니다.`,
  },
  ERROR: {
    unit: '[ERROR] 입력받은 값이 해당 단위와 다릅니다.',
    number: '[ERROR] 입력받은 값은 올바른 숫자가 아닙니다.',
    length: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplicate: '[ERROR] 중복된 로또 번호는 없어야 합니다.',
    lottoRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
};
