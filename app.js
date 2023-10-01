const birthYearInput = document.getElementById("num");
const pElement = document.querySelector("p");


function myFunction() {
    const birthYear = parseInt(birthYearInput.value);
    
    if (!isNaN(birthYear) && birthYear >=1925 && birthYear <=2022) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        pElement.style.color ="aquamarine"
        pElement.textContent = `AGE: ${age}`;
    } else {
        pElement.style.color = "red";
        pElement.textContent = "Please Enter a valid birth year.";
    }
}
