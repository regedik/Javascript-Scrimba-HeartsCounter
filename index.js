let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
const heartCode = countEl.textContent;
const heartsCode = '💕';

function increment() {
    count += 1
    countEl.textContent = count + heartCode
}

function save() {
    let countStr = count + heartsCode + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 + heartCode
    count = 0
}
