const MIN = 1;
const MAX = 45;
const FULL_NUMBER_LENGTH = 6;

export default class ValidationService {
  isNumber(num) {
    return !Number.isNaN(+num);
  }

  isDividedBy1000(num) {
    return num > 0 && +num % 1000 === 0;
  }

  isInRange(ticket) {
    return (
      ticket.length ===
      ticket.filter((num) => {
        return num >= MIN && num <= MAX;
      })
    );
  }

  hasSixNumbers(ticket) {
    return ticket.length === FULL_NUMBER_LENGTH;
  }

  isUnique(ticket) {
    const uniqueArray = [];
    ticket.forEach((num) => {
      if (uniqueArray.includes(num)) {
        return false;
      }
      uniqueArray.push(num);
    });
    return true;
  }
}
