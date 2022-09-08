const number = document.querySelectorAll('.nbtn');
const operator = document.querySelectorAll('.obtn');
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const clrBtn = document.querySelector('.clrbtn');
const dltBtn = document.querySelector('.dltbtn');
const eqBtn = document.getElementById('eqbtn');
let num1 = ''
let num2 = ''
let opr = ''

number.forEach(btn => btn.onclick = () => sscreenUpdate(btn.textContent))
operator.forEach(btn => btn.onclick = () => fscreenUpdate(btn.textContent))
clrBtn.addEventListener('click', clearScreen);
dltBtn.onclick = function () {
    num1 = secondScreen.textContent.slice(0, secondScreen.textContent.length - 1)
    num2 = ''
    secondScreen.textContent = num1
}
eqBtn.addEventListener('click', function () {
    if (opr !== '' && num1 !== '' && num2 !== '') {
        firstScreen.textContent = `${num2} ${opr} ${num1} =`
        secondScreen.textContent = operate(opr, num1, num2)
    }
});

function clearScreen() {
    num1 = ''
    num2 = ''
    firstScreen.textContent = ''
    secondScreen.textContent = '0'
}

function sscreenUpdate(num) {
    (num === '.' & num1.includes('.')) ? num1 : num1 += num
    secondScreen.textContent = num1
}

function fscreenUpdate(op) {
    if (num2 === '') {
        opr = op;
        num2 = num1
        firstScreen.textContent = `${num2} ${opr}`
        num1 = ''
    }
    else if (opr !== '' && num1 !== '' && num2 !== '') {
        let num = operate(opr, num1, num2)
        secondScreen.textContent = num
        firstScreen.textContent = `${num} ${opr = op}`
        num1 = ''
        num2 = num
    }
}

function operate(op, n1, n2) {
    let n = n1;
    n1 = parseFloat(n2)
    n2 = parseFloat(n) 

    if (op === '+') {
        return Math.round((n1 + n2) * 1000) / 1000
    }
    else if (op === '-') {
        return Math.round((n1 - n2) * 1000) / 1000
    }
    else if (op === 'x') {
        return Math.round((n1 * n2) * 1000) / 1000
    }
    else if (op === '÷') {
        if (n2 === 0) {
            alert("You can't divide by 0.")
            return 0
        }
        else {
            return Math.round((n1 / n2) * 1000) / 1000
        }
    }
}

