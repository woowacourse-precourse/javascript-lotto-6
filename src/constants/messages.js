const messages = {
  purchase: {
    try: '구입금액을 입력해 주세요.',
    success: '개를 구매했습니다.',
  },
  number: {
    winning: '당첨 번호를 입력해 주세요.',
    bonus: '보너스 번호를 입력해 주세요.',
  },
  statics: {
    headline: '당첨 통계',
    fifth: '3개 일치 (5,000원) - ',
    forth: '4개 일치 (50,000원) - ',
    third: '5개 일치 (1,500,000원) - ',
    second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    first: '6개 일치 (2,000,000,000원) - ',
  },
  error: {
    invalidAmount: '[ERROR] 금액은 1000 단위의 숫자여야 합니다.',
    invalidCount: '[ERROR] 로또 번호는 6개여야 합니다.',
    invalidNumber: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
};

export default messages;
