import { navbar } from "../components/navbar_append.js";
let navbar_append = document.getElementById("navbar");
navbar_append.innerHTML = navbar();





let womenfashionData = [
    {
       "image":"https://images.pexels.com/photos/6502503/pexels-photo-6502503.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"chain",
       "description":"cute and beautiful",
       "price":"120rs",
    },

    {
       "image":"https://images.pexels.com/photos/7636095/pexels-photo-7636095.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Crop top",
       "description":"stylish",
       "price":"500rs",
    },

    {
       "image":"https://images.pexels.com/photos/9303510/pexels-photo-9303510.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Earing",
       "description":"long and stylish",
       "price":"200rs",
    },

    {
       "image":"https://images.pexels.com/photos/8292144/pexels-photo-8292144.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"hair accessories",
       "description":"cute and beautiful",
       "price":"260rs",
    },

    {
       "image":"https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Jewellary",
       "description":"beautiful",
       "price":"900rs",
    },

    {
        "image":"https://images.pexels.com/photos/16556019/pexels-photo-16556019/free-photo-of-woman-in-a-beautiful-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Lehenga",
        "description":"long and cute",
        "price":"5,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/15181109/pexels-photo-15181109/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Saree",
        "description":"pretty and cute",
        "price":"4,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Heels",
        "description":"long and stylish",
        "price":"1,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Sport shoes",
        "description":"comfortable and stylish",
        "price":"1,500",
     },
 
     {
        "image":"https://images.pexels.com/photos/2658451/pexels-photo-2658451.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Sweater",
        "description":"stylish and warm",
        "price":"1,700",
     },
    
     {
        "image":"https://images.pexels.com/photos/15984040/pexels-photo-15984040/free-photo-of-model-in-jeans.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"jeans",
        "description":"comfortable",
        "price":"1,200",
     },
 
     {
        "image":"https://images.pexels.com/photos/15876505/pexels-photo-15876505/free-photo-of-woman-sitting-on-log.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Jacket",
        "description":"green colour",
        "price":"800",
     },
 
     {
        "image":"https://images.pexels.com/photos/6480701/pexels-photo-6480701.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"tank top",
        "description":"short top",
        "price":"350",
     },
 
     {
        "image":"https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"t-shirt",
        "description":"half arm white",
        "price":"550",
     },
 
     {
        "image":"https://images.pexels.com/photos/9637586/pexels-photo-9637586.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"ring",
        "description":"women beautiful ring",
        "price":"200",
     },
    
     {
        "image":"https://images.pexels.com/photos/7685838/pexels-photo-7685838.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Bangles",
        "description":"stylish",
        "price":"190rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/3214138/pexels-photo-3214138.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Hat",
        "description":"stylish and cute",
        "price":"220",
     },
 
     {
        "image":"https://images.pexels.com/photos/20300263/pexels-photo-20300263/free-photo-of-young-woman-in-a-crop-top-and-skirt-standing-on-a-street-in-city-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Skirt",
        "description":"short and cute",
        "price":"650",
     },
 
     {
        "image":"https://images.pexels.com/photos/15768558/pexels-photo-15768558/free-photo-of-young-woman-in-a-silver-gown-and-a-tiara-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Gown",
        "description":"long and beautiful",
        "price":"2,600",
     },
 
     {
        "image":"https://images.pexels.com/photos/15768585/pexels-photo-15768585/free-photo-of-young-woman-in-a-purple-dress-holding-a-bouquet-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Netted Gown",
        "description":"long and beautiful",
        "price":"3,000",
     },
     
]

let appendData = (womenfashionData)=>{
  
    let womenfashionList = document.getElementById("womenFashion");
    womenfashionList.innerText = null;

    womenfashionData.forEach(({image,name,description,price})=>{
           
        let womenfashionDiv = document.createElement("div");
        womenfashionDiv.setAttribute("id","womenfashionBox");

        let imagee = document.createElement("img");
        imagee.src = image;

        let namee = document.createElement("h2");
        namee.innerHTML = name;

        let descriptionn = document.createElement("p");
        descriptionn.innerHTML = description;

        let pricee = document.createElement("h3");
        pricee.innerHTML = price;

        let buttonn = document.createElement("button");
      buttonn.textContent = "Buy";

        womenfashionDiv.append(imagee,namee,descriptionn,pricee,buttonn);
        womenfashionList.append(womenfashionDiv);

})

}
appendData(womenfashionData)