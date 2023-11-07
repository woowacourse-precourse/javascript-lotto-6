import { MissionUtils } from "@woowacourse/mission-utils";

function Purchase() {}
Purchase.makeLottoArray = function (lottoPrice) {
  const lottoNumberArray = [];
  let lottoCount = lottoPrice / 1000;
  while (lottoCount > 0) {
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b);
    lottoNumberArray.push(randomArray);
    lottoCount--;
  }
  return lottoNumberArray;
};


export default Purchase;
