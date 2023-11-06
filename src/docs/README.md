<div align='center'>
<img src='https://velog.velcdn.com/images/seorim6417/post/a87b343b-bf97-4028-b360-d2a541110d46/image.png'/>

# 3주차 미션 - 로또

---

우아한테크코스 웹 프론트엔드 6기, 로또 미션 저장소입니다.
</div>

# START

---

```
npm install
node index
```



# **FEATURES**

---

1. **로또 금액 입력**
- 사용자로부터 로또 구입 금액을 입력받는다.
- 입력값이 1,000원 단위로 나누어 떨어지지 않는 경우 에러를 발생시킨다.

2. **로또 발행**
- 입력받은 구입 금액을 기반으로 로또를 발행한다.(구입 금액을 로또 가격으로 나눈 만큼 로또를 발행한다.)
- 로또 1장의 가격은 1,000원이다.

3. **로또 번호 생성**
- 당첨 번호를 입력받는다. 번호는 쉼표(,)를 기준으로 구분한다.
- 보너스 번호 하나를 입력받는다.
- 생성된 숫자를 오름차순으로 정렬한다.

4. **결과 확인**
- 사용자가 발행한 로또 번호와 당첨 번호를 비교하여 맞는 숫자의 개수를 비교하여 계산한다.
- 당첨 번호와 사용자의 로또 번호 비교 결과에 따라 1등부터 5등까지의 당첨 내역을 계산한다.
- 수익률을 계산한다.
- 결과값을 출력한다.

</br>

# DOMAIN

---

### Lotto

로또 티켓을 생성하고 유효성 검사를 수행하는 역할

| 메소드 | 설명 |
| --- | --- |
| constructor(numbers) | 로또 번호를 검사하고 저장 |
| #validate(numbers) | 로또 번호 배열의 길이가 6개가 아닌 경우 예외를 발생 |
| #validateDuplicate(numbers) | 중복된 번호가 있는 경우 예외를 발생 |
| getNumbers() | 로또 번호 배열을 반환 |

</br>

### **LottoStore**

구매한 로또 티켓 장수만큼 로또 티켓을 생성하는 기능

| 메소드 | 설명 |
| --- | --- |
| constructor(purchasedAmount) | 구매한 로또 티켓 수를 입력받아 초기화 |
| createLottoTickets() | 구매한 티켓 수에 따라 로또 티켓을 생성하고 배열로 반환 |
| createLottoTicket() | 무작위로 생성된 로또 번호를 가지고 로또 티켓을 만들어 반환 |

</br>

### **LottoProfitCalculator**

로또 당첨 상금 정보와 구매 가격을 기반으로 이익률을 계산 

| 메소드 | 설명 |
| --- | --- |
| constructor(lottoWinnerPrize, purchasedPrice) | 당첨 상금 정보와 구매 가격을 초기화 |
| rate() | 이익률을 계산하여 반환 |
| calculateTotalProfit() |  총 이익을 계산하여 반환 |

</br>

### LottoComparer

로또 티켓과 당첨 번호 정보를 기반으로 로또 당첨 상금을 비교하고 업데이트

**필드**

| 속성 | 설명 |
| --- | --- |
| lottos | 비교할 로또 티켓 목록 |
| WinningNumbers | 당첨 번호 정보 |
| bonusNumber | 보너스 번호 |
| lottoWinnerPrize | 로또 당첨 상금 정보 |
| LIMIT_COUNT | 당첨을 고려할 최소 일치 번호 개수 |

**메소드**

| 메소드 | 설명 |
| --- | --- |
| setComparedLottoNumbers() | 로또 티켓을 비교하고 당첨 상금을 업데이트 |
| updatePrize(hasBonusNumber, correctCount) | 로또 티켓의 당첨 상금을 업데이트 |
| findMatchedPrize(hasBonusNumber, correctCount) | 일치하는 상금 정보를 찾아 반환 |
| checkBonusNumber(lottoNumbers) | 보너스 번호와 일치하는지 확인 |
| countCorrectNumbers(lottoNumbers) | 일치하는 번호의 개수를 세어 반환 |


</br>

### LottoWinnerPrize

로또 당첨 상금 정보

| 속성 | 설명 |
| --- | --- |
| fifthPrize | 5등 상금 정보 (3개 일치) |
| fourthPrize | 4등 상금 정보 (4개 일치) |
| thirdPrize | 3등 상금 정보 (5개 일치) |
| secondPrize | 2등 상금 정보 (5개 일치 + 보너스 번호 일치) |
| firstPrize | 1등 상금 정보 (6개 일치) |

</br>

# TEST

---

## **LottoStore**

**[TEST1]** LottoStore 로또 번호를 받고 오름차순으로 정렬이 되어야 한다.

**[TEST2]** 인자로 받은 수 만큼 올바른 티켓 번호가 생성이 되어야 한다. 

</br>

## **LottoProfitCalculator**

**[TEST1]** 객체의 총 가격의 합을 계산한다.

**[TEST2]** 이익률이 올바르게 계산되어야 한다.

</br>

## Lotto

**[TEST1]** 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.

**[TEST2]** 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.

**[TEST3]**  유효하지 않은 번호에 대한 예외가 발생한다.

- 숫자의 범위가 1 - 45 의 범위가 아닐때
- 타입이 숫자가 아닐때
- 정수가 아닐때
