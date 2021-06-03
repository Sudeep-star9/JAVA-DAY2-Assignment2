const Fruits_Inventory={
    Apple:200,
    Mango:300,
    Orange:555,
    Banana:645,
    Grapes:799
}

const Fruits_Price={
    Apple:100,
    Mango:200,
    Orange:50,
    Banana:25,
    Grapes:100
}
const Apple_Quantity=4;
const Total_Price_Apple=Apple_Quantity*Fruits_Price.Apple;
console.log(Total_Price_Apple);

const Mango_Quantity=3;
const Total_Price_Mango=Mango_Quantity*Fruits_Price.Mango;
console.log(Total_Price_Mango);

const Orange_Quantity=2
const Total_Price_Orange=Orange_Quantity*Fruits_Price.Orange;
console.log(Total_Price_Orange);

const Total_Cost=Total_Price_Apple+Total_Price_Mango+Total_Price_Orange;
console.log(Total_Cost)

