import { MissionUtils } from "@woowacourse/mission-utils";

function Purchase() {}
Purchase.makeLottoArray = function (lottoCount) {
  const lottoNumberArray = [];
  while (lottoCount > 0) {
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b);
    lottoNumberArray.push(randomArray);
    lottoCount--;
  }
  return lottoNumberArray;
};
Purchase.makeTicket = function (lottoPrice) {
  const lottoCount = lottoPrice / 1000;
  const lottoTickets = this.makeLottoArray(lottoCount);
  return lottoTickets;
};

export default Purchase;
