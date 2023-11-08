import { MissionUtils } from "@woowacourse/mission-utils";

async function getLottoNumberInput() {
  MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
  const lottoNumber = await MissionUtils.Console.readLineAsync("");
  const lottoNumberArray = lottoNumber.split(",");
  MissionUtils.Console.print("");
  return lottoNumberArray;
}

export default getLottoNumberInput;
