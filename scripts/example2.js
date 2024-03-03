let data = [
    
    {
    "image":"https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name":"laptop",  
    "description":"3months old",
    "price":"13,000",
},
{
    "image":"https://cdn.moglix.com/p/GO4X7DhS86S1o-xxlarge.jpg",
    "name":"product2",
    "description":"4 months old",
    "price":"15,000", 
},
{
    "image":"https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name":"product3",
    "description":"6 months old", 
    "price":"20,000",
},

{
    "image":"https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name":"product4",
    "description":"8 months old",
    "price":"13,000",
},
{
    "image":"https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=600",
    "name":"product5",
    "description":"10 months old",
    "price":"12,000",
}  

]




let appendData = (data)=>{
let div = document.getElementById("products");
 div.innerHTML = null;
//accessing all the elements from data example:taking img url, name,description,price
data.forEach(({image,name,description,price})=>{
    let divs = document.createElement("div");
     divs.setAttribute("id","createdList");
    let images = document.createElement("img");
    images.src = image;
    let names = document.createElement("h2");
    names.innerText = name;
    let descriptions = document.createElement("p");
    descriptions.innerText = description;
    let prices = document.createElement("p");
    prices.innerText = price;
    //create button
    let buttons = document.createElement("button");
    buttons.textContent = "Add to cart";

    //append div 

    
    divs.append(images,names, descriptions,prices,buttons);
    div.append(divs);
    



})

}

//calling function 
appendData(data);
