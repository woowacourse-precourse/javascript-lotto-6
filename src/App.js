import LottoController from "./Controller/LottoController.js"
class App {
    async play() {
        const lottoController = new LottoController();
        
        await lottoController.inputCash();
        lottoController.buyTicket();
        
        await lottoController.selectWinNumber();
        await lottoController.selectBonusNumber();

        lottoController.setPrizeResult();
        lottoController.printResult();
    }
}

export default App;
