import { Console } from "@woowacourse/mission-utils";

async function inputAmount() {
  return await Console.readLineAsync("구매 금액을 입력해 주세요.");
}
async function inputLottoNumbers() {
  return await Console.readLineAsync("당첨 번호를 입력해 주세요.");
}
async function inputBonusNumber() {
  return await Console.readLineAsync("보너스 번호를 입력해 주세요.");
}

const InputMessages = {
  inputAmount,
  inputLottoNumbers,
  inputBonusNumber,
};

export default InputMessages;
