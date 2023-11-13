
// document.addEventListener("DOMContentLoaded", () => {

//     const petContainer = document.querySelector("#petContainer")

//     pets.forEach(pet => {

//         // create a div for each product
//         const div = document.createElement("div");
//         div.classList.add("pet") ;
//         div.id = "product-" + product.productId ;
        
//         // add product heading
//         const h4 = document.createElement("h4")
//         h4.innerText = product.name;
//         div.appendChild(h4);

//         // add product image
//         const img = document.createElement("img");
//         img.src = "images/products/" + product.imageUrl
//         div.appendChild(img)
        
//         // add product price
//         const h3 = document.createElement("h3")
//         h3.innerText = `$${product.price}`
//         div.appendChild(h3);

//         // add product description
//         const paragraph = document.createElement("p")
//         paragraph.innerHTML = product.description
//         div.appendChild(paragraph)

//         imageContainer.appendChild(div);
//         // console.log(div);
//     });

// })


document.addEventListener("DOMContentLoaded", () => {

    displayPets(pets);
})

function displayPets(pets) {

    // check if the browser supports templates
    if('content' in document.createElement('template')){
        const productsContainer = document.querySelector("#content")
        // clear all elements
        productsContainer.innerHTML = "";

        pets.forEach(pet => {
            addPet(pets, productsContainer);
    
       
        });
    }
}

function addProduct(product, parent) {
    const template = document.getElementById("product-template").content.cloneNode(true);
    template.getElementById("title").innerText = product.name;
    template.querySelector("img").src = "images/products/" + product.imageUrl
    template.querySelector(".price").innerText = `$${product.price}`
    template.querySelector("p").innerText = product.description;

    parent.appendChild(template)
}
