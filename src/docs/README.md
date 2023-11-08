# 🎟️ 로또 미션

## 📜 기능 목록

### 🧾 로또 구매  
#### 입력값 받기
- 구매 금액 입력 받은 후 구매 갯수 생성 

### 🎲 자동 랜덤 번호
#### 자동 랜덤 번호 생성
- 구매 갯수 만큼 `missionUtils`의 `Random` 함수를 통해 6개의 자동 랜덤 번호 생성

#### 자동 랜덤 번호 출력

### 🎲 당첨 번호 입력
#### 일반 당첨 번호 입력
- 당첨번호를 입력 받고 split 하여 저장
#### 보너스 당첨 번호 입력

### 🖨️ 결과 출력
#### 당첨 등수 출력
- 당첨 번호와 자동 랜덤 번호를 비교하여 당첨 등수 및 당첨 금액 출력
#### 수익률 출력
- 구매 금액과 당첨금액의 합을 비교하여 수익률 계산 후 출력

## 🗄️ Class Diagram

``` mermaid

classDiagram
  Controller <-- inputView : Passing Input
  Controller --> outputView : Passing myLottoCount, quickPicks, returnRate
  Controller --> MyLotto : Handle MyLotto Model
  Controller --> MyWallet : Handle MyWallet Model
  Controller --> WinNumber : Handle WinNumber Model
  Controller --> ReturnMoneyService
  Controller --> Service
  MyLotto <--> Service
  MyLotto <--> ReturnMoneyService
  MyWallet <--> ReturnMoneyService
  WinNumber <--> Service


  Controller : #myWallet
  Controller : #myLotto
  Controller : #winNumber

  Controller : handlePurchaseAmount() 
  Controller : handleLottoCount(input)
  Controller : handleQuickPicks()
  Controller : handleCommonWinNumber()
  Controller : handleBonusWinNumber()
  Controller : handleWinCount()
  Controller : handleReturnRate()

  inputView : readPurchaseAmount()
  inputView : readCommonWinNumber()
  inputView : readBonusWinNumber()

  outputView : printLottoCount(count)
  outputView : printQuickPicks(quickPicks)
  outputView : printReturnRate(returnRate)

  MyLotto : #lottoCount
  MyLotto : #quickPicks
  MyLotto : #winCountArr
  MyLotto : #winResultArr
  MyLotto : setLottoCount(input)
  MyLotto : setQuickPicks()
  MyLotto : setWinCount()
  MyLotto : setWinResult()
  MyLotto : getLottoCount()
  MyLotto : getQuickPicks()
  MyLotto : getWinCountArr()
  MyLotto : getWinResultArr()
  

  MyWallet : #purchaseAmount
  MyWallet : #returnMoney
  MyWallet : #returnRate
  MyWallet : setPurchaseAmount(input)
  MyWallet : setReturnMoney(input)
  MyWallet : setReturnRate()
  MyWallet : getPurchaseAmount()
  MyWallet : getReturnRate()

  WinNumber : #commonWinNum
  WinNumber : #bonusWinNum
  WinNumber : setCommonWinNum(input)
  WinNumber : setBonusWinNum(input)
  WinNumber : getCommonWinNum()
  WinNumber : getBonusWinNum()

  Service : compareNumber()
  Service : compareEachNumber(quickPick)

  ReturnMoneyService : calculateWinMoney()
  
```

## 🗂️ 폴더 구조
```
📂 javascript-baseball-6
├─ .gitignore
├─ .npmrc
├─ README.md
├─ 📂 src
│  ├─ App.js
│  ├─ index.js
│  ├─ Lotto.js
│  ├─ 📂 constant
│  │  ├─ CODE.js
│  │  ├─ MESSAGE.js
│  │  └─ SETTING.js
│  ├─ 📂 Controller
│  │  └─ Controller.js
│  ├─ 📂 docs
│  │  └─ README.md
│  ├─ 📂 Model
│  │  │ MyLotto.js
│  │  │ MyWallet.js
│  │  │ WinNumber.js
│  │  └─ 📂 utils
│  │     │  randomLotto.js
│  │     └─ winResult.js
│  ├─ 📂 Validation
│  │  └─ .gitkeep
│  └─ 📂 view
│     ├─ inputView.js
│     └─ outputView.js
└─ 📂 __tests__
   ├─ ApplicationTest.js
   └─ LottoTest.js
```