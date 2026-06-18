const imageBtn = document.getElementById("dogImageBtn");
const dogBtn = document.getElementById("dogBtn");
const output = document.getElementById("output");

// Show Random Dog Image
imageBtn.addEventListener("click", function () {

    fetch("https://api.thedogapi.com/v1/images/search")

        .then(response => response.json())
        .then(data => {
            output.innerHTML = `
                <h2>Random Dog</h2>
                <img src="${data[0].url}" alt="Random Dog Image" width="300">
            `;
        })

        .catch(error => {
            output.innerHTML = "<p>Error loading dog image.</p>";
            console.log(error);
        });
});

// Dog Info 
dogBtn.addEventListener("click", function () {
    fetch("https://api.thedogapi.com/v1/images/breeds")

    .then(response => response.json())
    .then(data => {
        const randomBreed =
        data[Math.floor(Math.random() * data.length)];
// theres no breeds so I added the information available (id, width, height)
        output.innerHTML = `
        <h2>Dog Information</h2>
        <p><strong>Name:</strong> ${randomBreed.name}</p>
        <p><strong>Temperament:</strong> ${randomBreed.temperament}</p>
        <p><strong>Life Span:</strong> ${randomBreed.life_span}</p>
        <p><strong>Weight:</strong> ${randomBreed.weight.metric} kg</p>`;
    })
    
    .catch(error => {
        output.innerHTML = "<p>Error loading breed information.</p>";
        console.log(error);
    });
});