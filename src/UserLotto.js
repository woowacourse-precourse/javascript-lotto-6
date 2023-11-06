import { MissionUtils } from "@woowacourse/mission-utils";

class UserLotto {
  #list;

  #count;

  constructor(count){
    this.#list = [];
    this.#count = count;
    console.log(this.#count)
  }

}

export default UserLotto;