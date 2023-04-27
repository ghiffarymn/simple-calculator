let countEl = document.getElementById("count-el");

let count = 0

// number buttons

function button1() {
    if (count === 0) {
        count = '1';
      } else {
        count += '1';
    }
    countEl.textContent = count;
}

function button2() {
    if (count === 0) {
        count = '2';
      } else {
        count += '2';
    }
    countEl.textContent = count;
}

function button3() {
    if (count === 0) {
        count = '3';
      } else {
        count += '3';
    }
    countEl.textContent = count;
}

function button4() {
    if (count === 0) {
        count = '4';
      } else {
        count += '4';
    }
    countEl.textContent = count;
}

function button5() {
    if (count === 0) {
        count = '5';
      } else {
        count += '5';
    }
    countEl.textContent = count;
}

function button6() {
    if (count === 0) {
        count = '6';
      } else {
        count += '6';
    }
    countEl.textContent = count;
}

function button7() {
    if (count === 0) {
        count = '7';
      } else {
        count += '7';
    }
    countEl.textContent = count;
}

function button8() {
    if (count === 0) {
        count = '8';
      } else {
        count += '8';
    }
    countEl.textContent = count;
}

function button9() {
    if (count === 0) {
        count = '9';
      } else {
        count += '9';
    }
    countEl.textContent = count;
}

function button0() {
    if (count === 0) {
        count = '0';
      } else {
        count += '0';
      }
    countEl.textContent = count;
}

// operations button

function buttonAdd() {
    count += '+';
    countEl.textContent = count;
}
function buttonSubtract() {
    count += '-';
    countEl.textContent = count;
}

function buttonMultiply() {
    count += '*';
    countEl.textContent = count;
}

function buttonDivide() {
    count += '/';
    countEl.textContent = count;
}

// reset button

function buttonEnter() {
    count = eval(count);
    countEl.textContent = count;
}

function buttonReset() {
    count = 0;
    countEl.textContent = count;
}