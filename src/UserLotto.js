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
        const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        this.#list.push(lotto);
    }
  }

  getList(){
    return this.#list;
  }

  getCount(){
    return this.#count;
  }

}

export default UserLotto;