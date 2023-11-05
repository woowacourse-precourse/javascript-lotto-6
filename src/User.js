import * as MissionUtils from "@woowacourse/mission-utils";

class User {
  #money;

  async #inputMoney() {
    await MissionUtils.Console.print("구입금액을 입력해 주세요: ");
    const INPUT_MONEY = await MissionUtils.Console.readLineAsync("");
    this.#money = Number(INPUT_MONEY);
  }

  // async play() {
  //   await this.#inputMoney();
  // }
}

export default User;

// const user = new User();
// await user.play();
