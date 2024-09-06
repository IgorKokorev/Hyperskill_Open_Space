document.addEventListener("DOMContentLoaded", loadAll);

let checkButtons = null;
let levers = null;
let launchButton = null;
let passwordButton = null;
let passwordInput = null;
const correctPassword = 'TrustNo1';

function disableControl(isDisabled) {
    for (let i = 0; i < checkButtons.length; i++) {
        let checkButton = checkButtons[i];
        checkButton.disabled = isDisabled;
    }
    for (let i = 0; i < levers.length; i++) {
        let checkButton = levers[i];
        checkButton.disabled = isDisabled;
    }
}

function checkPassword() {
    let password = passwordInput.value;
    if (password === correctPassword) {
        disableControl(false);
        passwordButton.disabled = true;
        passwordInput.disabled = true;
    }
}

function checkControls() {
    let activateLaunchButton = true;
    for (let i = 0; i < checkButtons.length; i++) {
        let checkButton = checkButtons[i];
        if (!checkButton.checked) {
            activateLaunchButton = false;
            break;
        }
    }
    if (activateLaunchButton) {
        for (let i = 0; i < levers.length; i++) {
            let lever = levers[i];
            if (Number(lever.value) < Number(lever.max)) {
                activateLaunchButton = false;
                break;
            }
        }
    }
    launchButton.disabled = !activateLaunchButton;
}

function launchRocket() {
    console.log('Rocket launched');
    let id = null;
    const rocket = document.getElementById("rocket");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos === 80) {
            clearInterval(id);
        } else {
            pos++;
            rocket.style.botom = (20 + pos) + '%';
            rocket.style.left = (45 + pos / 2) + '%';
        }
    }
}

function loadAll() {
    checkButtons = document.getElementsByClassName("check-button");
    levers = document.getElementsByClassName("lever");
    launchButton = document.getElementById("launch-button");
    passwordButton = document.getElementById('input-text-button');
    passwordInput = document.getElementById('input-text');

    launchButton.disabled = true;
    launchButton.addEventListener("click", launchRocket);
    disableControl(true);
    passwordButton.addEventListener('click', checkPassword);
    for (let i = 0; i < checkButtons.length; i++) {
        let checkButton = checkButtons[i];
        checkButton.addEventListener('change', checkControls);
    }
    for (let i = 0; i < levers.length; i++) {
        let lever = levers[i];
        lever.addEventListener('change', checkControls);
    }
}