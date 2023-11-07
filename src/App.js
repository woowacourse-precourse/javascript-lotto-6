import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import Generation from "./Service/Generation";

class App {
  
  async play() {
    const generation = new Generation(); // Generation 클래스의 인스턴스 생성
    const createdLottoNumbers = generation.getNum(); // 로또 번호 생성
    Console.print(createdLottoNumbers); // 생성된 로또 번호를 출력
  }
}

export default App;
