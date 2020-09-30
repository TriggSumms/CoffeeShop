const beanUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllCoffee()
        .then(coffee => {
            console.log(coffee)
        })
});

function getAllBeanVarieties() {
    return fetch(beanUrl).then(resp => resp.json());
}

function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}