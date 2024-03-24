function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCID = 0;
  const change = [];

  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }
  totalCID = totalCID.toFixed(2);

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID == changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();

    for (let elem of cid) {
      const currency = elem[0];
      const currencyValue = currencyValues[currency];
      let currencyAmount = elem[1];
      let count = 0;

      while (changeDue >= currencyValue && currencyAmount > 0) {
        changeDue -= currencyValue;
        changeDue = changeDue.toFixed(2);
        currencyAmount -= currencyValue;
        count++;
      }

      if (count > 0) {
        change.push([currency, count * currencyValue]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
  }
}

const cidArray = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

console.log(checkCashRegister(19.5, 20, cidArray));