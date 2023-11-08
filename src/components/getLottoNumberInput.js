import { MissionUtils } from "@woowacourse/mission-utils";

async function getLottoNumberInput() {
  try {
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const lottoNumber = await MissionUtils.Console.readLineAsync("");
    const lottoNumberArray = lottoNumber.split(",");
    checkLottoNumberInput(lottoNumberArray);
    MissionUtils.Console.print("");
    return lottoNumberArray;
  } catch (error) {
    MissionUtils.Console.print(`${error}`);
    return await getLottoNumberInput();
  }
}

function checkLottoNumberInput(numbers) {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  const set = new Set(numbers);
  if (6 !== set.size) {
    throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
  }
  numbers.forEach((e) => {
    if (isNaN(e)) {
      throw new Error("[ERROR] 숫자 형식이 아닙니다.");
    }
    if (e < 1 || e > 45) {
      throw new Error("[ERROR] 숫자는 1부터 45까지 입력해야 합니다.");
    }
  });
}

export default getLottoNumberInput;
