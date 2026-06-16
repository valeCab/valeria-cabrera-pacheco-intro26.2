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
    fetch("https://api.thedogapi.com/v1/images/search?has_breeds=1", {
    headers: {
        "x-api-key": "live_n90m0DCnPIhkb2sDe7ZlcAVqTJBnoQ72kpRJLar0Oi3A1iKuwplO5ostjdJSWWGr"}
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
// theres no breeds so I added the information available (id, width, height)
        output.innerHTML = `
        <h2>Dog Information</h2>
        <p><strong>ID:</strong> ${data[0].id}</p>
        <p><strong>Width:</strong> ${data[0].width}</p>
        <p><strong>Height:</strong> ${data[0].height}</p>`;
    })
    
    .catch(error => {
        output.innerHTML = "<p>Error loading breed information.</p>";
        console.log(error);
    });
});