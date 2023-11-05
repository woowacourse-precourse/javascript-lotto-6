import {Prints, Inputs} from '../View/index.js'
import { print } from '../../utils/index.js';
import { 
    CalcMoney,
    BonusNumber,
    Lotto,
    PayMoney, 
    TicketManager
} from '../Model/index.js'

import { MONEY } from '../../constants/numbers.js';

class LottoController {
    lotto;
    payMoney;
    bonusNumber;

    constructor() {
        // view
        this.print = new Prints();
        this.input = new Inputs();

        // model
        this.calcMoney = new CalcMoney();
        this.ticketManager = new TicketManager();

    }

    async inputCash() {
        try{
            const money = await this.input.money();
            this.payMoney = new PayMoney(money);

        } catch (error){
            print(error.message);
            await this.inputCash();
        }
    }

    buyTicket() {
        // 몇개의 복권을 구매하는지 계산
        const money = this.payMoney.getMoney();
        const ticketCount = money/MONEY.UNIT
        
        this.print.newLine();
        this.print.countTicket(ticketCount);

        // 정해진 개수의 복권 구매 
        this.ticketManager.addTicket(ticketCount);

        // 구매한 복권들 출력
        const tickets = this.ticketManager.getTickets();
        this.print.tickets(tickets);
    }
    
    async selectWinNumber() {
        try{
            this.print.newLine();

            const winNumber = await this.input.winNumber();
            this.lotto = new Lotto(winNumber);

        } catch (error) {
            print(error.message);
            await this.selectWinNumber();
        }
    }

    async selectBonusNumber() {
        try{
            this.print.newLine();

            const bonusNumber = await this.input.bonusNumber();
            this.bonusNumber = new BonusNumber(bonusNumber);

        } catch (error) {
            print(error.message);
            await this.selectBonusNumber();
        }
    }
    setPrizeResult() {
        this.ticketManager.countMatchAllNumber(this.lotto,this.bonusNumber);
    }
    
    printResult() {
        this.print.newLine();
        this.print.prizeResult();

        const matches = this.ticketManager.matches;
        this.print.sameCount(matches);

        const returnMoney = this.calcMoney.calcReturnMoney(matches);
        const returnRate = this.calcMoney.calcReturnRate(returnMoney,this.payMoney.money);

        this.print.rateOfReturn(returnRate);
    }
    
}

export default LottoController;