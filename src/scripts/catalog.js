

export const Catalog = (harvestedFoodArray) => {
    for (const food of harvestedFoodArray) {
        let output = document.querySelector('.container')
        output.innerHTML += `<section class="plant">${food.type}</section>`
    }
}
