import DongHang from './DongHang.js';
import Statistics from './Statistics.js';
import User from './User.js';

class App {
  /*
   * 1. '사용자' 생성
   * 2. '사용자'가 복권을 구매
   * 3. '동행복권'에서 당첨 번호를 생성
   * 4. '사용자'가 구매한 복권과 당첨 번호를 비교
   * 5. '통계'를 생성
   * 6. '통계'를 출력
   */
  async play() {
    this.user = new User();
    await this.user.buy();

    const winningNumbers = await DongHang.makeWinningNumbers();
    const results = this.user.checkAll(winningNumbers);

    const statistics = new Statistics(results);
    statistics.show();
  }
}

export default App;
