### 로또 게임 객체

- 로또 구입 금액 입력 받기
  > 1000의 배수가 아니면 에러 처리
- 당첨 번호와 보너스 번호 입력 받기

  > 중복되는 숫자가 있거나 개수가 안 맞으면 에러 처리

  > 로또 번호가 1 ~ 45 사이의 숫자가 아니면 에러 처리

- 입력 부분에서 에러가 발생하면 에러 메세지 출력하고 입력 다시 받기
- 구입 금액에 맞는 로또 발행
- 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률 출력

  > 수익률 소수점 둘째 자리에서 반올림

---

### 로또 객체

- 중복되지 않는 6자리 숫자
- 당첨 번호와 비교하여 일치한 번호의 개수 리턴

---

### 유효성 검사

- 로또 구매 가격

  > 로또 구매 가격이 숫자 형식이 아니면 IncorrectFormatError

  > 로또 구매 가격이 LOTTO.PRICE의 배수가 아니면 IncorrectFormatError

- 로또 번호

  > 로또 번호의 개수가 LOTTO.NUMBER_COUNT와 다르면 IncorrectLottoCountError

  > 로또 번호가 숫자 형식이 아니면 IncorrectFormatError

  > LOTTO.MIN_NUMBER ~ LOTTO.MAX_NUMBER 사이의 숫자가 아니면 IncorrectLottoNumberError

  > 로또 번호가 중복된 값을 가지면 DuplicateNumbersError
