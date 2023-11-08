function validateUnit(unit, price) {
  if (price % unit !== 0) throw new InputError('');
}
function stringToNumber(text) {
  return Number(text);
}
function exchangeTicket(price) {
  const TICKET_PRICE = 1000;
  const ticketCount = price / TICKET_PRICE;
  return ticketCount;
}

export { stringToNumber, validateUnit, exchangeTicket };
