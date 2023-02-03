"use strict";
function hello(name) {
    console.log('hello ' + name + '' + name);
}
hello("liviu");
var FoodType;
(function (FoodType) {
    FoodType[FoodType["Burger"] = 0] = "Burger";
    FoodType[FoodType["Pizza"] = 1] = "Pizza";
    FoodType[FoodType["Pasta"] = 2] = "Pasta";
})(FoodType || (FoodType = {}));
function Food() {
    let foodPrint = {
        [FoodType.Burger]: () => {
            console.log("Burger");
        },
        [FoodType.Pizza]: () => {
            console.log("Burger");
        },
        [FoodType.Pasta]: () => {
            console.log("Burger");
        }
    };
    function print(FoodType) {
        foodPrint[FoodType]();
    }
    print(FoodType.Burger);
}
Food();
