let price = 1.87;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
] 
/*cid = [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0.5],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 20],
  ['ONE HUNDRED', 0]
];*/
let intCid = cid.map((el) => {
  return el.toSpliced(1, 1, Math.round(el[1] * 100))
});
//console.log(intCid)
let spans = document.querySelectorAll("#div-3 span")
let cash = document.getElementById("cash");
let purchaseBtn = document.getElementById("purchase-btn");
let content = document.getElementById("div1");
let changeDue = document.getElementById("change-due");
let fixedPrice = document.getElementById("price");
price = 3.26;
fixedPrice.innerText = `$${price}`;
let workingPrice = Math.round(price * 100)

for (let i = 0; i < 9; i++) {
  spans[i].innerHTML = `$${cid[i][1]}`;
}
function getBalance() {
  changeDue.innerHTML = "";
  const currencyUnit1 = {
  PENNY: 0,
  NICKEL: 0,
  DIME: 0,
  QUARTER: 0,
  ONE: 0,
  FIVE: 0,
  TEN: 0,
  TWENTY: 0,
  "ONE HUNDRED": 0,
  }
let previousIntCid = intCid.map((el) => [...el]);
let cashInDrawer = 0;
intCid.forEach((el) => {
  cashInDrawer += el[1];
})

  let cashBalance = Math.round(cash.value * 100 - price * 100);
  let realCashBalance = Math.round(cash.value * 100 - price * 100);
  
  if (realCashBalance < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (realCashBalance == 0) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    return;
  } else {
     if (cashInDrawer < realCashBalance) {
       changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
       return;
     } else if (cashInDrawer == realCashBalance) {
       changeDue.innerHTML = "Status: CLOSED";
       for (let i = 8; i >= 0; i--) {
         if (cid[i][1] == 0) {continue}
  changeDue.innerHTML += `<p>${cid[i][0]}: $${cid[i][1]}</p>`;
} 
  for (let i = 0; i < 9; i++) {
    spans[i].innerHTML = `$${0}`;
  }
  intCid = [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];
cid = intCid.map((ele) => {
  return ele.toSpliced(1, 1, ele[1] / 100)
})
       return;
     } else {
       changeDue.innerHTML += `<p>Status: OPEN</p>`;
        while (cashBalance > 0) {
          if (cashBalance >= 10000 && intCid[8][1] > 0) {
            cashBalance -= 10000;
            intCid[8][1] -= 10000;
            currencyUnit1["ONE HUNDRED"]++
            changeDue.innerHTML += (cashBalance < 10000 || intCid[8][1] <= 0) ? `<p>ONE HUNDRED: $${100 * currencyUnit1["ONE HUNDRED"]}</p>` : ""
          } else if (cashBalance >= 2000 && intCid[7][1] > 0) {
            cashBalance -= 2000;
            intCid[7][1] -= 2000   
            currencyUnit1.TWENTY++;
            changeDue.innerHTML += (cashBalance < 2000 || intCid[7][1] <= 0) ? `<p>TWENTY: $${20 * currencyUnit1.TWENTY}</p>` : ""
          } else if (cashBalance >= 1000 && intCid[6][1] > 0) {
            cashBalance -= 1000;
            intCid[6][1] -= 1000
            currencyUnit1.TEN++;
            changeDue.innerHTML += (cashBalance < 1000 || intCid[6][1] <= 0) ? `<p>TEN: $${10 * currencyUnit1.TEN}</p>` : ""
        } else if (cashBalance >= 500 && intCid[5][1] > 0) {
            cashBalance -= 500;
            intCid[5][1] -= 500
            currencyUnit1.FIVE++;
            changeDue.innerHTML += (cashBalance < 500 || intCid[5][1] <= 0) ? `<p>FIVE: $${5 * currencyUnit1.FIVE}</p>` : ""
     } else if (cashBalance >= 100 && intCid[4][1] > 0) {
            cashBalance -= 100;
            intCid[4][1] -= 100;
            currencyUnit1.ONE++;
            changeDue.innerHTML += (cashBalance < 100 || intCid[4][1] <= 0) ? `<p>ONE: $${1 * currencyUnit1.ONE}</p>` : ""
       } else if (cashBalance >= 25 && intCid[3][1] > 0) {
            cashBalance -= 25;
            intCid[3][1] -= 25;
            currencyUnit1.QUARTER++;
            changeDue.innerHTML += (cashBalance < 25 || intCid[3][1] <= 0) ? `<p>QUARTER: $${0.25 * currencyUnit1.QUARTER}</p>` : ""
           }  else if (cashBalance >= 10 && intCid[2][1] > 0) {
            cashBalance -= 10;
            intCid[2][1] -= 10;
            currencyUnit1.DIME++;
            changeDue.innerHTML += (cashBalance < 10 || intCid[2][1] <= 0) ? `<p>DIME: $${0.1 * currencyUnit1.DIME}</p>` : ""
           }  else if (cashBalance >= 5 && intCid[1][1] > 0) {
            cashBalance -= 5;
            intCid[1][1] -= 5;
            currencyUnit1.NICKEL++;
            changeDue.innerHTML += (cashBalance < 5 || intCid[1][1] <= 0) ? `<p>NICKEL: $${0.05 * currencyUnit1.NICKEL}</p>` : ""
           } else {
            cashBalance -= 1;
            intCid[0][1] -= 1;
            currencyUnit1.PENNY++;
            if (cashBalance < 1 && intCid[0][1] >= 0) {
              changeDue.innerHTML += `<p>PENNY: $${0.01 * currencyUnit1.PENNY}</p>`
              break;
            } if (intCid[0][1] < 0) {
              changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
              intCid = previousIntCid;
              return;
              }
           }
      }       
    }
  }
  cid = intCid.map((ele) => {
  return ele.toSpliced(1, 1, ele[1] / 100)
})
  for (let i = 0; i < 9; i++) {
  spans[i].innerHTML = `$${cid[i][1]}`;
}
  console.log(cashInDrawer)
  console.log(cid)
  console.log(currencyUnit1)
  cash.value = "";
}

purchaseBtn.addEventListener("click", () => {
  getBalance()
  })