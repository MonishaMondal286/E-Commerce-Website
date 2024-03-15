import { navbar } from "../components/navbar_append.js";
import { footer } from "../components/footer_append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();

let originalElectronicsData = [
    {
       "image":"https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"iphone",
       "description":"2 months old",
       "price":"50,000",
    },

    {
       "image":"https://images.pexels.com/photos/6373048/pexels-photo-6373048.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Tab",
       "description":"4 months old",
       "price":"5,000",
    },

    {
       "image":"https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
       "name":"Laptop",
       "description":"7 months old",
       "price":"17,000",
    },

    {
       "image":"https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"earbud",
       "description":"4 months old",
       "price":"2,600",
    },

    {
       "image":"https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Watch",
       "description":"5 months old",
       "price":"2,000",
    },

    {
        "image":"https://images.pexels.com/photos/13302159/pexels-photo-13302159.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Samsung",
        "description":"4 months old",
        "price":"20,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Camera",
        "description":"8 months old",
        "price":"38,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Headphone",
        "description":"1 months old",
        "price":"2,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Mouse",
        "description":"2 months old",
        "price":"1,600",
     },
 
     {
        "image":"https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Keyboard",
        "description":"2 months old",
        "price":"1,000",
     },
    
     {
        "image":"https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"USB Port",
        "description":"5 months old",
        "price":"900",
     },
 
     {
        "image":"https://images.pexels.com/photos/5208819/pexels-photo-5208819.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Mobile Charger",
        "description":"5 months old",
        "price":"1,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/13823992/pexels-photo-13823992.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"HP Laptop",
        "description":"8 months old",
        "price":"19,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/19269761/pexels-photo-19269761/free-photo-of-laptop-on-a-pink-desk.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Lenovo Laptop",
        "description":"2 months old",
        "price":"20,600",
     },
 
     {
        "image":"https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Watch",
        "description":"5 months old",
        "price":"2,000",
     },
    
     {
        "image":"https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Home Theatre",
        "description":"12 months old",
        "price":"5,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Television",
        "description":"14 months old",
        "price":"5,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/3199028/pexels-photo-3199028.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Radio",
        "description":"17 months old",
        "price":"1,000",
     },
 
     {
        "image":"https://images.pexels.com/photos/16592625/pexels-photo-16592625/free-photo-of-air-conditioner-in-a-house.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Air Conditioner",
        "description":"14 months old",
        "price":"25,600",
     },
 
     {
        "image":"https://images.pexels.com/photos/15874635/pexels-photo-15874635/free-photo-of-young-woman-in-a-pink-dress-holding-a-hair-straightener.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Hair Straightener",
        "description":"15 months old",
        "price":"1,000",
     },
     
]


let electronicsDataCopy = [...originalElectronicsData]; // Copy original data for searching
// Function to append data to the HTML
let appendData = (data) => {
   let productList = document.getElementById("electronicsList1");
   productList.innerHTML = ''; // Clear previous data

   data.forEach(({ image, name, description, price }) => {
       let productDiv = document.createElement("div");
       productDiv.classList.add("productBox");

       let imageElem = document.createElement("img");
       imageElem.src = image;

       let nameElem = document.createElement("h2");
       nameElem.textContent = name;

       let descriptionElem = document.createElement("p");
       descriptionElem.textContent = description;

       let priceElem = document.createElement("h3");
       priceElem.textContent = price;

       let buttonElem = document.createElement("button");
       buttonElem.textContent = "Buy";

       productDiv.append(imageElem, nameElem, descriptionElem, priceElem, buttonElem);
       productList.appendChild(productDiv);
   });
}

// Initial data rendering
appendData(electronicsDataCopy);

// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
   const searchTerm = searchInput.value.trim().toLowerCase();
   electronicsDataCopy = originalElectronicsData.filter(item =>
       item.name.toLowerCase().includes(searchTerm) ||
       item.description.toLowerCase().includes(searchTerm)
   );
   appendData(electronicsDataCopy);
});
