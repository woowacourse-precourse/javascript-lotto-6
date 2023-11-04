import LottoGenerator from "./LottoGenerator.js";

const lottoTickets = new LottoGenerator();

class App {
  async play() {
    lottoTickets.getLottoTickets();
  }
}

export default App;
