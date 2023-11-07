import { pickUniqueNumbersInRange } from '../../utils/index.js';
import { LOTTO } from '../../constants/index.js';

class TicketManager {
    constructor() {
        this.tickets = [];
        this.matches = {
            "3": 0,
            "4" : 0,
            "5" : 0,
            "5b": 0,
            "6": 0
        }
    }

    addTicket(number) {
        for(let i = 0; i<number; i++){
            const ticket = pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT);
            this.tickets.push(ticket);
        }
    }
    
    getTickets() {
        return this.tickets;
    }
    getMatches() {
        return this.matches;
    }

    countMatchAllNumber(lotto, bonus){
        this.tickets.forEach((ticket) => {
            const lottoMatch = lotto.getMatchCount(ticket, bonus.number);
            this.countMatchNumber(lottoMatch);
        })
    }

    countMatchNumber(lottoMatch) {
        if(lottoMatch.main >2){
            lottoMatch.bonus == true ? this.matches["5b"]++ :this.matches[lottoMatch.main.toString()]++;
        }
    }
    
}


export default TicketManager;