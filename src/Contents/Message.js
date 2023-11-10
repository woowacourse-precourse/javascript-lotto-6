const MESSAGE = {
    input: {
      price: "구입금액을 입력해 주세요.",
      number: "당첨 번호를 입력해 주세요.",
      bonus_number: "보너스 번호를 입력해 주세요.",
    },
  
    output: {
      purchaseInformation: (lottoInformations) => {
        const count = lottoInformations.length;
        const formattedLottoInfos = lottoInformations.map((info) => `[${info.join(", ")}]`).join("\n");
        return `${count}개를 구매했습니다.\n${formattedLottoInfos}`;
      },
      statistics: (totalResult, rate) => `당첨 통계
  ---
  3개 일치 (5,000원) - ${totalResult.three}개
  4개 일치 (50,000원) - ${totalResult.four}개
  5개 일치 (1,500,000원) - ${totalResult.five}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalResult.fiveBonus}개
  6개 일치 (2,000,000,000원) - ${totalResult.six}개
  총 수익률은 ${rate}%입니다.`,
    }
  };
  
  Object.freeze(MESSAGE.input);
  Object.freeze(MESSAGE.output);
  
  export default MESSAGE;
  