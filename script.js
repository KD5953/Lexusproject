function searchZipCode() {

    const zipCode = document.getElementById("zipCodeInput").value;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `You entered zip code: ${zipCode}`;
}
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchZipCode);