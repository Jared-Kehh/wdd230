
fetch('./fruits.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from the file');
        }
        return response.json();
    })
    .then(data => {
        // Populate each select dropdown with fruit options
        populateSelect('fruitselect1', data);
        populateSelect('fruitselect2', data);
        populateSelect('fruitselect3', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Function to populate a select dropdown with fruit options
function populateSelect(selectId, fruits) {
    const selectElement = document.getElementById(selectId);

    // Iterate through the list of fruits and add them as options
    fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        selectElement.appendChild(option);
    });
}

// //fruits1
// fetch('fruits.json')
// .then(response => response.json())
// .then(data => {
//     const selectElement = document.getElementById('fruitselect1');

//     // Iterate over the JSON data
//     data.forEach(fruit => {
//         // Create option element
//         const option = document.createElement('option');
//         option.id = fruit.id;
//         option.textContent = fruit.name;

//         // Append option to select element
//         selectElement.appendChild(option);
//     });
// })
// .catch(error => console.error('Error fetching JSON:', error));

// //fruits2
// fetch('fruits.json')
// .then(response => response.json())
// .then(data => {
//     const selectElement2 = document.getElementById('fruitselect2');

//     // Iterate over the JSON data
//     data.forEach(fruit => {
//         // Create option element
//         const option = document.createElement('option');
//         option.id = fruit.id;
//         option.textContent = fruit.name;

//         // Append option to select element
//         selectElement2.appendChild(option);
//     });
// })
// .catch(error => console.error('Error fetching JSON:', error));

// //fruits3
// fetch('fruits.json')
// .then(response => response.json())
// .then(data => {
//     const selectElement3 = document.getElementById('fruitselect3');


//     // Iterate over the JSON data
//     data.forEach(fruit => {
//         // Create option element
//         const option = document.createElement('option');
//         option.id = fruit.id;
//         option.textContent = fruit.name;

//         // Append option to select element
//         selectElement3.appendChild(option);
//     });
// })
// .catch(error => console.error('Error fetching JSON:', error));
