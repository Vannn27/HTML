let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));
let operator = ['+', '-', 'x', '/'];
let input = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if(buttonText === 'C') {
            input = '';
            display.value = input;
            return;
        }

        if(buttonText === '<') {
            input = input.substr(0, input.length-1);
            display.value = input;
            return;
        }

        if(buttonText === '=') {
            try {
                input = input.replace('x', '*');
                display.value = eval(input);
            } catch {
                display.value = "Error";
            }
            return;
        }

        input += buttonText;
        display.value = input;
    });
});

let degree = 45;
setInterval(() => {
    document.body.style.background = `linear-gradient(${degree}deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)`;
    degree++;
    if(degree > 360) {
        degree = 0;
    }
}, 100);