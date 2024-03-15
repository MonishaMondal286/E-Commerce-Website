import { navbar } from "../components/navbar_append.js";
import { footer } from "../components/footer_append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();








let menfashionData = [
    {
       "image":"https://images.pexels.com/photos/15835597/pexels-photo-15835597/free-photo-of-man-wearing-checked-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"shirt",
       "description":"check shirt",
       "price":"600rs",
    },

    {
       "image":"https://images.pexels.com/photos/15835619/pexels-photo-15835619/free-photo-of-man-with-a-beard-wearing-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":" T-Shirt",
       "description":"collared",
       "price":"500rs",
    },

    {
       "image":"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"T-shirt",
       "description":"half sleeves",
       "price":"600rs",
    },

    {
       "image":"https://images.pexels.com/photos/18723999/pexels-photo-18723999/free-photo-of-elegant-brunette-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"jump suit",
       "description":"men's jump suit",
       "price":"1,000",
    },

    {
       "image":"https://images.pexels.com/photos/19276437/pexels-photo-19276437/free-photo-of-young-man-in-an-elegant-outfit-standing-in-a-room-with-houseplants.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"t-shirt",
       "description":"full arm",
       "price":"950rs",
    },

    {
        "image":"https://images.pexels.com/photos/15987641/pexels-photo-15987641/free-photo-of-young-man-in-a-white-t-shirt-jeans-and-a-cap-posing-in-studio-on-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Cap",
        "description":"cap",
        "price":"150rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Tie",
        "description":"colourful",
        "price":"400rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"boots",
        "description":"smart and cool",
        "price":"1,500 rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/1432034/pexels-photo-1432034.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Sport shoes",
        "description":"used for jogging, running etc",
        "price":"1,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/20324484/pexels-photo-20324484/free-photo-of-black-and-white-photo-of-a-man-in-a-sweater-leather-jacket-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Jackets",
        "description":"keeps warm and comfort",
        "price":"1,200rs",
     },
    
     {
        "image":"https://images.pexels.com/photos/4486779/pexels-photo-4486779.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"sweat shirt",
        "description":"full arm",
        "price":"700",
     },
 
     {
        "image":"https://images.pexels.com/photos/11012756/pexels-photo-11012756.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Socks",
        "description":"comfortable",
        "price":"50rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/6292446/pexels-photo-6292446.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Track suit",
        "description":"warm and comfy",
        "price":"2,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/5067669/pexels-photo-5067669.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"shorts",
        "description":"comfortable and short",
        "price":"300rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/15971704/pexels-photo-15971704/free-photo-of-black-and-white-photo-of-a-young-man-in-a-casual-outfit-standing-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Jeans",
        "description":"comfortable and soft",
        "price":"2,000",
     },
    
     {
        "image":"https://images.pexels.com/photos/15976669/pexels-photo-15976669/free-photo-of-muscular-man-in-ripped-jeans-and-unbuttoned-shirt-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Torn Jeans",
        "description":"stylish and comfortable",
        "price":"3,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"hand bag",
        "description":"stylish",
        "price":"850rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"chain",
        "description":"stylish",
        "price":"250rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/15853788/pexels-photo-15853788/free-photo-of-elegant-man-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Sunglass",
        "description":"stylish ",
        "price":"430rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/15727980/pexels-photo-15727980/free-photo-of-hand-with-a-gold-ring.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"ring",
        "description":"cute and cool",
        "price":"150rs",
     },
     
]


let appendData = (menfashionData)=>{
     
    let menFashionList = document.getElementById("menFashion");
    menFashionList.innerText = null;

    menfashionData.forEach(({image,name,description,price})=>{
      let menFashionDiv = document.createElement("div");
      menFashionDiv.setAttribute("id","menFashionBox");

      let imagee = document.createElement("img");
      imagee.src = image;

      let namee = document.createElement("h2");
      namee.innerText = name;

      let descriptionn = document.createElement("p");
      descriptionn.innerText = description;

      let pricee = document.createElement("h3");
      pricee.innerText = price;

      let buttonn = document.createElement("button");
      buttonn.textContent = "Buy";

      menFashionDiv.append(imagee,namee,descriptionn,pricee,buttonn);
      menFashionList.append(menFashionDiv);



    })

}
    appendData(menfashionData)









