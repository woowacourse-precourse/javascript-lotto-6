const MIN = 1;
const MAX = 45;

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
}
