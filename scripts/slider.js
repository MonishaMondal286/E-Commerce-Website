
let data = [ {
    "img":"scripts/sliderimg/image1.png"
   },
   {
    "img":"scripts/sliderimg/image2.png"
   },
   {
    "img":"scripts/sliderimg/image3.png"
   }
   
]

let index = 0;
let imageElement = document.getElementById("imgg");
function autoSlider(){
    
   index = (index+1)%data.length;
   imageElement.src = data[index].img;
    

}
setInterval(autoSlider,4000);
