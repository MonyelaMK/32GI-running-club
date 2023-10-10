/*========================= Search Bar Start =======================*/

const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
});

/*========================= Product Start =======================*/
const cart = [];

const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        productFilter: "bottle",
        image: "/assets/images/products/bottle-1.jpg",
        name: "Smooth Bottle",
        // rating: {
        //     stars: 4.5,
        //     count: 87
        // },
        priceCents: 1090,
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        productFilter: "powder",
        image: "/assets/images/products/powder-1.jpg",
        name: "Muscle Powder",
        // rating: {
        //     stars: 4,
        //     count: 127
        // },
        priceCents: 2095,
        keywords: [
            "sports",
            "basketballs"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        productFilter: "shirt",
        image: "/assets/images/products/shirt-1.jpg",
        name: "Shirt Name",
        // rating: {
        //     stars: 4.5,
        //     count: 56
        // },
        priceCents: 799,
        keywords: [
            "tshirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        productFilter: "shoe",
        image: "/assets/images/products/shoe-1.jpg",
        name: "Shoe Name",
        // rating: {
        //     stars: 5,
        //     count: 2197
        // },
        priceCents: 1899,
        keywords: [
            "toaster",
            "kitchen",
            "appliances"
        ]
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        productFilter: "special",
        image: "/assets/images/products/special-5.jpg",
        name: "Special Product",
        // rating: {
        //     stars: 4,
        //     count: 37
        // },
        priceCents: 2067,
        keywords: [
            "plates",
            "kitchen",
            "dining"
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        productFilter: "trouser",
        image: "/assets/images/products/trouser-2.jpg",
        name: "Trouser Name",
        // rating: {
        //     stars: 4.5,
        //     count: 175
        // },
        priceCents: 3499,
        keywords: [
            "kitchen",
            "cookware"
        ]
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        productFilter: "watch",
        image: "/assets/images/products/watch-7.jpg",
        name: "Watch Name",
        // rating: {
        //     stars: 4.5,
        //     count: 317
        // },
        priceCents: 2400,
        keywords: [
            "hoodies",
            "sweaters",
            "apparel"
        ]
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        productFilter: "bottle",
        image: "/assets/images/products/bottle-1.jpg",
        name: "Bottle Name",
        // rating: {
        //     stars: 4.5,
        //     count: 144
        // },
        priceCents: 3599,
        keywords: [
            "bathroom",
            "washroom",
            "restroom",
            "towels",
            "bath towels"
        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        productFilter: "powder",
        image: "/assets/images/products/powder-3.jpg",
        name: "Powder Name",
        // rating: {
        //     stars: 4.5,
        //     count: 305
        // },
        priceCents: 2899,
        keywords: [
            "bathroom",
            "cleaning"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        productFilter: "shirt",
        image: "/assets/images/products/shirt-3.jpg",
        name: "Shirt Name",
        // rating: {
        //     stars: 4,
        //     count: 89
        // },
        priceCents: 3390,
        keywords: [
            "shoes",
            "running shoes",
            "footwear"
        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        productFilter: "shoe",
        image: "/assets/images/products/shoe-7.jpg",
        name: "Shoe Name",
        // rating: {
        //     stars: 4.5,
        //     count: 235
        // },
        priceCents: 2070,
        keywords: [
            "robe",
            "swimsuit",
            "swimming",
            "bathing",
            "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        productFilter: "special",
        image: "/assets/images/products/special-2.jpg",
        name: "Special Name",
        // rating: {
        //     stars: 4.5,
        //     count: 30
        // },
        priceCents: 1560,
        keywords: [
            "accessories",
            "shades"
        ]
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        productFilter: "trouser",
        image: "/assets/images/products/trouser-3.jpg",
        name: "Trouser Name",
        // rating: {
        //     stars: 4.5,
        //     count: 562
        // },
        priceCents: 2499,
        keywords: [
            "footwear",
            "sandals",
            "womens",
            "beach",
            "summer"
        ]
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        productFilter: "watch",
        image: "/assets/images/products/watch-4.jpg",
        name: "Watch Name",
        // rating: {
        //     stars: 4.5,
        //     count: 232
        // },
        priceCents: 4599,
        keywords: [
            "bedroom",
            "curtains",
            "home"
        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        productFilter: "bottle",
        image: "/assets/images/products/bottle-2.jpg",
        name: "Bottle Name",
        rating: {
            stars: 4,
            count: 160
        },
        priceCents: 1699,
        keywords: [
            "shorts",
            "apparel",
            "mens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        productFilter: "shoe",
        image: "/assets/images/products/shoe-6.jpg",
        name: "Shoe Name",
        rating: {
            stars: 5,
            count: 846
        },
        priceCents: 3074,
        keywords: [
            "water boiler",
            "appliances",
            "kitchen"
        ]
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        productFilter: "shirt",
        image: "/assets/images/products/shirt-8.jpg",
        name: "Shirt Name",
        rating: {
            stars: 4,
            count: 99
        },
        priceCents: 2374,
        keywords: [
            "kleenex",
            "tissues",
            "kitchen",
            "tissues box",
            "napkins"
        ]
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        productFilter: "bottle",
        image: "/assets/images/products/bottle-3.jpg",
        name: "Bottle Name",
        rating: {
            stars: 4,
            count: 215
        },
        priceCents: 2200,
        keywords: [
            "hats",
            "straw hats",
            "summer",
            "apparel"
        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        productFilter: "shoe",
        image: "/assets/images/products/shoe-4.jpg",
        name: "Shoe Name",
        rating: {
            stars: 4.5,
            count: 52
        },
        priceCents: 1799,
        keywords: [
            "jewelry",
            "accessories",
            "womens"
        ]
    }
];

let productsHTML = "";

products.forEach((product) => {
    productsHTML += `
            <div class="gallery">
                <div class="content store-product ${product.productFilter}">
                    <div class="image">
                        <img src="${product.image}"
                            alt="">
                    </div>
                    <h3>${product.name}</h3>
                    <ul>
                        <li><i class="fa fa-star checked"></i></li>
                        <li><i class="fa fa-star checked"></i></li>
                        <li><i class="fa fa-star checked"></i></li>
                        <li><i class="fa fa-star checked"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                    <h6>R${(product.priceCents / 100).toFixed(2)}</h6>
                    <div class="product-quantity-container">
                        <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>
                    <button class="primary-btn top-btn">View Product</button>
                    <button class="secondary-btn p-btn js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
    `;
    // console.log(productsHTML);
});

// console.log(productsHTML);

// Add to Cart
document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // console.log('Added to Cart');
        // button.dataset       Get the data
        // console.log(button.dataset.productName);
        const productId = button.dataset.productId;
        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

        console.log(cartQuantity);

        console.log(cart);
    });
});

/*========================= SideBar Start =======================*/
const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

const storeProducts = document.querySelectorAll(".store-product");
// console.log(selectBtn, items);

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");
        /*
        console.log(checked.length);
        if (checked && checked.length > 0) {
            console.log("valid");
            btnText.innerHTML = `${checked.length} Selected`;
        } else {
            console.log("invalid");
            btnText.innerHTML = `Selected Language`;
        }*/
    })
});

for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", (e) => {
        // e.preventDefault();
        const filter = e.target.dataset.filter;
        console.log(filter);
        storeProducts.forEach((product) => {
            if (filter == "all") {
                product.style.display = "block";
            }
            else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";
                }
                else {
                    product.style.display = "none";
                }
            }
        })
    })
}
// Search Filter
const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();

    for (let i = 0; i < storeProducts.length; i++) {
        if (storeProducts[i].classList.contains(searchValue)) {
            storeProducts[i].style.display = "block";
        } else if (searchValue == "") {
            storeProducts[i].style.display = "block";
        } else {
            storeProducts[i].style.display = "none";
        }
    }
})
