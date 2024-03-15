import { navbar } from "../components/navbar_append.js";
import { footer } from "../components/footer_append.js";

let add_navbar=document.getElementById("navbar");
let add_footer=document.getElementById("footer");

add_navbar.innerHTML=navbar();
add_footer.innerHTML=footer();







let stationaryData = [
    {
       "image":"https://images.pexels.com/photos/760897/pexels-photo-760897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       "name":"Paper pin",
       "description":"used in projects,office work etc..",
       "price":"5rs/packet(10pins)",
    },

    {
       "image":"https://images.pexels.com/photos/459799/pexels-photo-459799.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Colour Pencils",
       "description":"used in colouring",
       "price":"30rs",
    },

    {
       "image":"https://images.pexels.com/photos/236118/pexels-photo-236118.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Scissors",
       "description":"cutting papers",
       "price":"50rs",
    },

    {
       "image":"https://images.pexels.com/photos/1915340/pexels-photo-1915340.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Crayons",
       "description":"used in colouring",
       "price":"100rs",
    },

    {
       "image":"https://images.pexels.com/photos/4226804/pexels-photo-4226804.jpeg?auto=compress&cs=tinysrgb&w=600",
       "name":"Paper Clip",
       "description":"used to handle sheets",
       "price":"5rs each",
    },

    {
        "image":"https://images.pexels.com/photos/6070384/pexels-photo-6070384.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Colour sheets",
        "description":"used in art and craft",
        "price":"350rs(500sheets)",
     },
 
     {
        "image":"https://images.pexels.com/photos/4219106/pexels-photo-4219106.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Brush Marker",
        "description":"draw borders",
        "price":"150rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/709626/pexels-photo-709626.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Thick Marker",
        "description":"12 sets",
        "price":"180rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/5566040/pexels-photo-5566040.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Water Paint",
        "description":"used for painting",
        "price":"150rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Files",
        "description":"used to store important papers",
        "price":"60rs",
     },
    
     {
        "image":"https://images.pexels.com/photos/5594335/pexels-photo-5594335.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"A4 sheets",
        "description":"used in projects or drawing",
        "price":"200rs(300 papers)",
     },
 
     {
        "image":"https://images.pexels.com/photos/6193084/pexels-photo-6193084.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Highlighter",
        "description":"Highlighting important words",
        "price":"20rs each",
     },
 
     {
        "image":"https://images.pexels.com/photos/7147544/pexels-photo-7147544.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Pencil",
        "description":"dark and grip",
        "price":"1 box 50rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/7256937/pexels-photo-7256937.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"pen stand",
        "description":"colours or crayons can be kept",
        "price":"60rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/5713706/pexels-photo-5713706.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Handmade Envelope",
        "description":"can be used as gift card ",
        "price":"20rs",
     },
    
     {
        "image":"https://images.pexels.com/photos/6193930/pexels-photo-6193930.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Sticky notes",
        "description":"can be used as short notes",
        "price":"50rs(50 sheets)",
     },
 
     {
        "image":"https://images.pexels.com/photos/5185075/pexels-photo-5185075.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Monthly planner",
        "description":"used for planning tasks",
        "price":"100rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/4778424/pexels-photo-4778424.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Calculator",
        "description":"used for calculations",
        "price":"50rs",
     },
 
     {
        "image":"https://images.pexels.com/photos/8101480/pexels-photo-8101480.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Book Marks",
        "description":"used in novel, books etc",
        "price":"10rs each",
     },
 
     {
        "image":"https://images.pexels.com/photos/15422287/pexels-photo-15422287/free-photo-of-planner-a-pencil-a-camera-and-stationery-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Dairy",
        "description":"used for taking notes",
        "price":"200rs",
     },
     
]


let appendData = (stationaryData)=>{
     
    let stationaryList1 = document.getElementById("stationaryList");
    stationaryList1.innerText = null;

    stationaryData.forEach(({image,name,description,price})=>{
      let stationaryDiv = document.createElement("div");
      stationaryDiv.setAttribute("id","stationaryBox");

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

      stationaryDiv.append(imagee,namee,descriptionn,pricee,buttonn);
      stationaryList1.append(stationaryDiv);



    })

}
    appendData(stationaryData)









