const MESSAGE = {
  input: {
    price: "구입금액을 입력해 주세요.",
    number: "당첨 번호를 입력해 주세요.",
    bonus_number: "보너스 번호를 입력해 주세요.",
  },

  output: {
    purchaseInformation: (lottoInformations) => {
      const count = lottoInformations.length;
      const formattedLottoInfos = lottoInformations
        .map((info) => `[${info.join(", ")}]`)
        .join("\n");
      return `${count}개를 구매했습니다.
${formattedLottoInfos}`;
    },
    statistics: (totalLottoResult, rate) => `당첨 통계
---
3개 일치 (5,000원) - ${totalLottoResult.three}개
4개 일치 (50,000원) - ${totalLottoResult.four}개
5개 일치 (1,500,000원) - ${totalLottoResult.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalLottoResult.fiveBonus}개
6개 일치 (2,000,000,000원) - ${totalLottoResult.six}개
총 수익률은 ${rate}%입니다.`,
  },
  money: {
    three: 5000,
    four: 50000,
    five: 1500000,
    fiveBonus: 30000000,
    six: 2000000000,
  },
  result: {
    three: 0,
    four: 0,
    five: 0,
    fiveBonus: 0,
    six: 0,
  }
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.money);
Object.freeze(MESSAGE.result);

export default MESSAGE;
