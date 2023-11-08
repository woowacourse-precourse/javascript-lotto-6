import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "../validate/Validate.js";

class Computer {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;
  static LOTTO_PRICE = 1000;
  static INPUT_LOTTO_NUMBER_MESSAGE = "당첨 번호를 입력해 주세요.\n";
  static INPUT_BONUS_NUMBER_MESSAGE = "보너스 번호를 입력해 주세요.\n";

  constructor() {
    this.validate = new Validate();
  }

  issuanceLotto = (lottoAmount) => {
    const purchaseQuantity = lottoAmount / Computer.LOTTO_PRICE;
    Console.print(`${purchaseQuantity}개를 구매했습니다.`);
    var lottoList = Array.from({ length: purchaseQuantity }, () => []);

    for (let i = 0; i < purchaseQuantity; i++) {
      while (lottoList[i].length !== 6) {
        const lottoNumber = Random.pickNumberInRange(
          Computer.MIN_LOTTO_NUMBER,
          Computer.MAX_LOTTO_NUMBER,
        );
        if (!lottoList[i].includes(lottoNumber)) {
          lottoList[i].push(lottoNumber);
        }
      }
      console.log(lottoList[i]);
    }
    return lottoList;
  };

  async inputLottoNumber() {
    const LottoNumbers = await Console.readLineAsync(
      Computer.INPUT_LOTTO_NUMBER_MESSAGE,
    );
    if (this.validate.validateLottoNumbers(LottoNumbers)) {
      return LottoNumbers;
    }
  }

  async inutBonusNumber(lottoNumber) {
    const bonusNumber = await Console.readLineAsync(
      Computer.INPUT_BONUS_NUMBER_MESSAGE,
    );
    this.validate.validateBonusNumber(lottoNumber, bonusNumber);
    return bonusNumber;
  }
}

export default Computer;
