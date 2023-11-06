import { MissionUtils } from "@woowacourse/mission-utils";

class UserLotto {
  #list;

  #count;

  constructor(count){
    this.#list = [];
    this.#count = count;
  }

  createLottos(){
    for(let i = 0;i < this.#count; i += 1){
        const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort();
        this.#list.push(lotto);
    }
  }

}

export default UserLotto;