let screen = document.getElementById('our-screen')
let buttons = document.querySelectorAll('button')
let screenDisplay = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = "*";
            screenDisplay += buttonText;
            screen.value += buttonText
        }
        else if (buttonText == "%") {
            buttonText = "/100";
            screenDisplay += buttonText;
            screen.value += buttonText;
        }
        else if (buttonText == "C") {
            screenDisplay = "";
            screen.value = ""
        }
        else if (buttonText == "=") {
            screen.value = eval(screenDisplay)
            screenDisplay = "";
        }
        else {
            screenDisplay += buttonText
            screen.value = screenDisplay;
        }
    })

}