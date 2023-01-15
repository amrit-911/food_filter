let array = [
    { foodName: "Burger", foodCategory: "Snacks", isJunkFood: true, calories: 300, foodItemImageUrl: "https://www.freepnglogos.com/uploads/burger-png/burger-pav-bhaji-sharma-vishnu-fast-food-corner-14.png" },
    { foodName: "Pav Bhaji", foodCategory: "Lunch", isJunkFood: false, calories: 350, foodItemImageUrl: "https://www.organictattva.com/wp-content/uploads/2019/05/paav-bhaji.png" },
    { foodName: "Pizza", foodCategory: "Snacks", isJunkFood: true, calories: 400, foodItemImageUrl: "https://www.freepnglogos.com/uploads/pizza-png/comment-faire-pizza-parfaite-maison-32.png" },
    { foodName: "French Fries", foodCategory: "Snacks", isJunkFood: true, calories: 200, foodItemImageUrl: "https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png" },
    { foodName: "Palak Panner", foodCategory: "Lunch", isJunkFood: false, calories: 600, foodItemImageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg" },
    { foodName: "Momos", foodCategory: "Snacks", isJunkFood: true, calories: 290, foodItemImageUrl: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" },
    { foodName: "Chole Bhature", foodCategory: "Lunch", isJunkFood: false, calories: 550, foodItemImageUrl: "https://www.secondrecipe.com/wp-content/uploads/2016/04/channa-bhatura-500x500.jpg" },
    { foodName: "Samosa", foodCategory: "Snacks", isJunkFood: true, calories: 240, foodItemImageUrl: "http://cdn.shopify.com/s/files/1/0235/7064/5069/products/8PunjabiSamosa_1200x1200.jpg?v=1602877589" },
]

function Filter(type) {
    document.querySelector(".container-food-list ").innerHTML = ""
    if (type == 'lunch') {

        array.filter(function(item) {
            if (item.foodCategory == "Lunch") {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`

            }
        })
    } else if (type == 'calories') {

        array.filter(function(item) {
            if (item.calories < 300) {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
            }
        })
    } else if (type == 'junk') {

        array.filter(function(item) {
            if (item.isJunkFood == true) {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
            }
        })
    } else {
        array.filter(function(item) {
            document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
            <img class="images" src="${item.foodItemImageUrl}" alt="">
            <h1>${item.foodName}</h1>
            <p>${item.foodCategory}</p>
            <p>${item.calories} calories</p>

        </div>`
        })
    }

}
array.filter(function(item) {
    document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
})