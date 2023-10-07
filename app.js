const birthYearInput = document.getElementById("num");
const pElement = document.querySelector("p");
const h1Element = document.querySelector("h1");
const h2Element = document.querySelector("h2");
const languageButton = document.getElementById("languageButton");

let isGeorgian = false;

function toggleLanguage() {
    isGeorgian = !isGeorgian;

    if (isGeorgian) {
        h1Element.textContent = "მოდი გამოვიცნობ შენს ასაკს";
        h2Element.textContent = "შეიყვანე შენი დაბადების წელი";
        pElement.textContent = isGeorgian ? "ასაკი:" : "AGE:";
        languageButton.textContent = "EN";
    } else {
        h1Element.textContent = "Let Me Guess Your AGE";
        h2Element.textContent = "Enter Your Birth Year";
        pElement.textContent = isGeorgian ? "ასაკი:" : "AGE:";
        languageButton.textContent = "KA";
    }
}

function myFunction() {
    const birthYear = parseInt(birthYearInput.value);

    if (!isNaN(birthYear) && birthYear >= 1925 && birthYear <= 2022) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        pElement.style.color = "aquamarine";
        pElement.textContent =  `ასაკი: ${age}`;

    } else if (birthYearInput.value === "") {
        pElement.textContent =  `AGE: ${age}`;
    } else {
        pElement.style.color = "red";
        pElement.textContent = isGeorgian ? "გთხოვთ შეიყვანოთ სწორი დაბადების წელი." : "Please Enter a valid birth year.";
    }
}

document.getElementById("submit").addEventListener("click", myFunction);



