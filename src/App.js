import { getNumber, getMaxLottoNumber } from './pages/modules.js';

class App {
    async play() {
        let money = getNumber();
        let MaxLottoNumber = getMaxLottoNumber(money);
    }
}

export default App;
