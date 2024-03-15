import { navbar } from "../components/navbar_append.js";
import { footer } from "../components/footer_append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();















let productData = [
     {
        "image":"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"earphone",
        "description":"2 months old",
        "price":"12,000",
     },

     {
        "image":"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"earphone",
        "description":"4 months old",
        "price":"14,000",
     },

     {
        "image":"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"earphone",
        "description":"6 months old",
        "price":"16,000",
     },

     {
        "image":"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"earphone",
        "description":"8 months old",
        "price":"18,000",
     },

     {
        "image":"https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"earphone",
        "description":"10 months old",
        "price":"19,000",
     },
     
]



let appendData = (productData)=>{
//access each and every variable 
let ProductList = document.getElementById("products");
ProductList.innerText = null;

productData.forEach(({image,name,description,price})=>{
    let divs = document.createElement("div");
    divs.setAttribute("id","createdList");
    let images = document.createElement("img");
    images.src = image;
    let names = document.createElement("h2");
    names.innerText = name;
    let descriptions = document.createElement("p");
    descriptions.innerText = description;
    let prices = document.createElement("h2");
    prices.innerText = price;
    let buttons = document.createElement("button");
    buttons.textContent = "Add to cart";
    
    divs.append(images,names,descriptions,prices,buttons);
    ProductList.append(divs);


})




}

appendData(productData)