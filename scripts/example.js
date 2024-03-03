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


let append_product = (data)=>{
    let productsList = document.getElementById("products");  
productsList.innerHTML = null; 

data.forEach(({image,name,description,price})=>{
    let div = document.createElement("div");
    div.setAttribute("id","createdList");
    let imgg = document.createElement("img"); 
    imgg.src = image;
    let namee = document.createElement("h2"); 
    namee.innerText = name;
    let descriptionn = document.createElement("p");
    descriptionn.innerText = description;
    let pricee= document.createElement("p");
    pricee.innerText = price;
    let buttonn = document.createElement("button");
    buttonn.textContent = "Add to cart";

    //appending in div
    div.append(imgg,namee,descriptionn,pricee,buttonn); 

   productsList.append(div);
}) 

}

 append_product (data);





