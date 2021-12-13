let btn = document.querySelector("#btn");
let city = document.querySelector("#city");
let divTag = document.querySelector(".message");

btn.addEventListener('click', () => {
    let message = `Search for ${city.value}`;
    divTag.innerText = message;
    divTag.classList.add('active');
    setTimeout(() => {divTag.classList.remove('active')},2000);
    city.value = '';
});