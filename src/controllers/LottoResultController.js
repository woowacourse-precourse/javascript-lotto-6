class LottoResultController{
    userLotto;
    userWinningLotto;

    static setLottoResultController(userLotto, userWinningLotto){
        this.userLotto = userLotto;
        this.userWinningLotto = userWinningLotto;
    }

    
    static printLottoResult(gameResult){
        gameResult.printGame();
    }
}
export default LottoResultController;