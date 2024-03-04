
import { navbar } from "../components/navbar_append.js";
let add_navbar=document.getElementById("navbar");
add_navbar.innerHTML=navbar();










let groceriesData = [
    {
       "image":"https://images.pexels.com/photos/2985167/pexels-photo-2985167.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Eggs",
       "description":"healthy and tasty",
       "price":"7rs per piece",
    },

    {
       "image":"https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Straberry",
       "description":"1 week old",
       "price":"100/kg",
    },

    {
       "image":"https://images.pexels.com/photos/3737617/pexels-photo-3737617.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Orange",
       "description":"1 month old",
       "price":"70rs/kg",
    },

    {
       "image":"https://images.pexels.com/photos/10039794/pexels-photo-10039794.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Fish",
       "description":"1 months old",
       "price":"200rs/kg",
    },

    {
       "image":"https://images.pexels.com/photos/8446841/pexels-photo-8446841.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Apples",
       "description":"1.5 months old",
       "price":"250rs/kg",
    },

    {
        "image":"https://images.pexels.com/photos/10963356/pexels-photo-10963356.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Cucumber",
        "description":"1 month old",
        "price":"60rs/kg",
     },
 
     {
        "image":"https://images.pexels.com/photos/10039792/pexels-photo-10039792.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Pear",
        "description":"1.5 months old",
        "price":"100rs/kg",
     },
 
     {
        "image":"https://images.pexels.com/photos/5332563/pexels-photo-5332563.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Cake",
        "description":"tasty and different varieties",
        "price":"30rs/piece",
     },
 
     {
        "image":"https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Banana",
        "description":"tasty",
        "price":"50rs/kg",
     },
 
     {
        "image":"https://images.pexels.com/photos/4197987/pexels-photo-4197987.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Bun",
        "description":"tasty and delicious",
        "price":"15rs/piece",
     },
    
     {
        "image":"https://images.pexels.com/photos/33239/halloween-candy-chocolates-nuts-sweet.jpg?auto=compress&cs=tinysrgb&w=600",
        "name":"M&M chocolate",
        "description":"delicious",
        "price":"30rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/2147834/pexels-photo-2147834.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Ice cake",
        "description":"tasty and sweet",
        "price":"80rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/3883858/pexels-photo-3883858.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Ice cream",
        "description":"different flavours",
        "price":"90rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/19269761/pexels-photo-19269761/free-photo-of-laptop-on-a-pink-desk.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Lenovo Laptop",
        "description":"2 months old",
        "price":"20,600",
     },
 
     {
        "image":"https://images.pexels.com/photos/6167328/pexels-photo-6167328.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Dark chocolate",
        "description":"tasty",
        "price":"250rs",
     },
    
     {
        "image":"https://images.pexels.com/photos/8964260/pexels-photo-8964260.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Toffees",
        "description":"different shapes, colours and tastes",
        "price":"15rs each",
     },
 
     {
        "image":"https://images.pexels.com/photos/6773051/pexels-photo-6773051.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Pan cake",
        "description":"tasty",
        "price":"50rs each",
     },
 
     {
        "image":"https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Cold drinks",
        "description":"refreshing",
        "price":"100rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/248420/pexels-photo-248420.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Tomato",
        "description":"fresh",
        "price":"40rs/kg",
     },
 
     {
        "image":"https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Carrot",
        "description":"fresh and tasty",
        "price":"90rs/kg",
     },
     
]


let appendData = (groceriesData)=>{
     
    let groceriesList = document.getElementById("groceryList");
    groceriesList.innerText = null;

    groceriesData.forEach(({image,name,description,price})=>{
      let groceryDiv = document.createElement("div");
      groceryDiv.setAttribute("id","groceryBox");

      let images = document.createElement("img");
      images.src = image;

      let names = document.createElement("h2");
      names.innerText = name;

      let descriptions = document.createElement("p");
      descriptions.innerText = description;

      let prices = document.createElement("h3");
      prices.innerText = price;

      let buttonn = document.createElement("button");
      buttonn.textContent = "Buy";

      groceryDiv.append(images,names,descriptions,prices,buttonn);
      groceriesList.append(groceryDiv);



    })

}
    appendData(groceriesData)









