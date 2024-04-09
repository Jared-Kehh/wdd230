let url = new URL(window.location.href);
let params = url.searchParams;

document.querySelector('#first').textContent = params.get("firstname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent = params.get("fruitselect1");
document.querySelector('#fruit2').textContent = params.get("fruitselect2");
document.querySelector('#fruit3').textContent = params.get("fruitselect3");


let specialInstructions = params.get("instructions");
if (specialInstructions && specialInstructions.trim() !== "") {
    document.querySelector('#special').textContent = specialInstructions;
} else {
    document.querySelector('#special').textContent = "No special instructions";
}
const urlParams = new URLSearchParams(window.location.search);

// JavaScript
fetch('fruits.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(fruitsData => {
        const selectedFruitNames = [params.get("fruitselect1"), params.get("fruitselect2"), params.get("fruitselect3")];
        let totalCalories = 0;
        let totalCarbohydrates = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalSugar = 0;

        selectedFruitNames.forEach(selectedFruitName => {
            const selectedFruit = fruitsData.find(fruit => fruit.name === selectedFruitName);

            if (selectedFruit) {
                totalCalories += selectedFruit.nutritions.calories;
                totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
                totalProtein += selectedFruit.nutritions.protein;
                totalFat += selectedFruit.nutritions.fat;
                totalSugar += selectedFruit.nutritions.sugar;
            }
        });

        // Display total calories
        document.querySelector('#totalCalories').textContent = totalCalories;
        document.querySelector('#totalCarbohydrates').textContent = totalCarbohydrates;
        document.querySelector('#totalProtein').textContent = totalProtein;
        document.querySelector('#totalFat').textContent = totalFat;
        document.querySelector('#totalSugar').textContent = totalSugar;
    })
    .catch(error => {
        console.error('Error fetching fruits data:', error);
    });
// JavaScript
const currentDate = new Date();

// Get the month, day, and year
const month = currentDate.toLocaleString('default', { month: 'long' });
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Display the current date
document.querySelector('#currentDate').textContent = `${month} ${day}, ${year}`;