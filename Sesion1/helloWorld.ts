function hello(name:string){
    console.log('hello '+ name + ''+ name );

}
hello("liviu")

enum FoodType{
    Burger,
    Pizza,
    Pasta,
}

function Food() {
    let foodPrint = {
        [FoodType.Burger]: () => {
            console.log("Burger")
        },
        [FoodType.Pizza]: () => {
            console.log("Burger")
        },
        [FoodType.Pasta]: () => {
            console.log("Burger")
        }
    }

    function print(FoodType: FoodType) {
        foodPrint[FoodType]();
    }

    print(FoodType.Burger)
}

Food();





