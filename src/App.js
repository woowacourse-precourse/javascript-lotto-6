import { Random } from '@woowacourse/mission-utils'

class App {

  generatRandomLotto(){
    const number = Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async play() {

  }
}

export default App;
