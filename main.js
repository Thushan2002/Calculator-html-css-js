const show = document.querySelector(".show");

const values = document.querySelectorAll(".values");
const operations = document.querySelectorAll(".operations");

const functions = document.querySelectorAll(".functions li");

// reset and clear
for (let i = 0; i < functions.length; i++) {
    const element = functions[i];

    element.addEventListener('click', () => {
        if (element.innerText == "Reset") {
            show.innerText = "0";
        }
        else {
            if (show.innerText.length == 1) {
                show.innerText = "0";
            }
            else {
                show.innerText = show.textContent.slice(0, -1);
            }
        }
    })

}

// insert values
for (let i = 0; i < values.length; i++) {
    let element = values[i];

    element.addEventListener('click', () => {
        if (show.innerText == "0") {
            show.innerText = element.innerText;
        }
        else {
            show.innerText = show.textContent.concat(element.innerText);
        }
    })

}

//  perform operations
for (let i = 0; i < operations.length; i++) {
    let element = operations[i];
    const x = "*";

    element.addEventListener('click', () => {
        if (show.innerText == "0") {
            show.innerText;
        }
        else {
            show.innerText = show.textContent.concat(element.innerText);
        }
    })

}

// equal function

const equal = document.querySelector(".equal");

equal.addEventListener('click', function equal() {
    show.innerText = eval(show.innerText);
})

const check = "hello+1-2+5-6-23-33+-";
const lastChar = check[check.length - 1];

console.log(lastChar);

if (lastChar === "+" || lastChar === "-") {
    console.log("symbol");
} else {
    console.log("no");
}

