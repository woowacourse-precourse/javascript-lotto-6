# 3주차 - 로또

</br>

# 구현할 기능 목록

</br>

## inputPurchaseAmunt()

---

</br>

> 로또 구매 금액을 입력 받는다
> 조건에 맞지 않는 경우 에러를 발생 시킨다.

 </br>

### 기능 설명

비동기로 로또 구입 금액을 입력 받는다. 구입 금액이 1000원 단위로 나누어 떨어지지 않는 경우, 에러를 발생시켜 1000원 단위로 입력해야 함을 알리고, 다시 재 입력 받도록 while문과 try...catch문을 활용해 구현한다.

</br>
</br>

## isValidPurchaseAmount(amount)

---

</br>

> 구입 금액이 유효한 입력인지 확인한다.

 </br>

### 기능 설명

입력된 구입 금액이 숫자형인지, 1000원 단위로 나누어 떨어지는 금액인지 판단하여 boolean 값을 반환한다.

</br>
</br>

## caculateNumberOfLottos(purchaseAmount)

---

</br>

> 구입 할 수 있는 로또의 개수를 계산한다.

</br>

### 기능 설명

입력 받은 구입 금액을 매개 변수로 받아서, 개당 1000원인 로또를 구입 할 수 있는 갯수를 반환한다.

</br>
</br>

## generateLottoNumbers()

---

</br>

> 1부터 45 사이의 숫자 중, 6개의 로또 숫자를 랜덤으로 생성한다.

</br>

### 기능 설명

라이브러리 함수를 이용하여, 1부터 45 사이의 숫자 총 6개를 랜덤으로 생성하여 반환한다.

</br>
</br>

## purchaseLottos(numberOfLottos)

---

</br>

> 구매한 로또 갯수만큼 로또 번호를 생성한다.

</br>
</br>

### 기능 설명

generateLottoNumbers() 생성자 함수를 사용하여, 6개의 랜덤 숫자를 받아, Lotto 객체에 push 하여 구매한 로또 갯수 만큼의 로또 번호를 생성한다.

</br>
</br>

## printPurchasedLottos()

---

</br>

> 로또 번호를 출력한다.

</br>
</br>

### 기능 설명

생성된 로또 번호들을 출력한다.

</br>
</br>

## inputWinningNumbersAndBonus()

---

</br>

> 당첨 번호를 입력 받는다.

</br>
</br>

### 기능 설명

당첨 번호와, 보너스 번호를 입력 받고, 반환해준다.

</br>
</br>

## calculateResults(winningNumbers, bonusNumber)

---

</br>

> 당첨된 로또의 갯수를 계산한다.

</br>
</br>

### 기능 설명

당첨 번호와, 보너스 번호를 내 로또 번호와 비교하여 각각의 맞춘 갯수 별로 당첨 횟수를 계산한다.

</br>
</br>

## printResults(results)

---

</br>

> 당첨 통계를 출력한다.

</br>
</br>

### 기능 설명

각각의 맞춘 갯수 별로 당첨 횟수와 맞춘 갯수 별 당첨 금액을 함깨 출력 한다.

</br>
</br>

## calculateTotalProfit(results)

---

</br>

> 총 수익률을 계산한다.

</br>
</br>

### 기능 설명

결과를 매개 변수로 입력 받아, 각각의 당첨 금액 별로 당첨 횟수를 곱하여 누적한 값을 통해 내가 구매한 금액과 계산하여 소수점 2번째 자리에서 반올림 하여 수익률을 반환한다.
