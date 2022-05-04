 

//add to cart

 const imagesId =  [ 
    {
      id:0,
      imgName:"iphone",
      price:10000
    },
   
    {
      id:1,
      imgName:"itel",
      price:10000
    },
   
    {
      id:2,
      imgName:"samsung",
      price:10000
    },

    {
        id:3,
        imgName:"images",
        price:10000
    },
    {
        id:4,
        imgName:"",
        price:10000
    },
    {
        id:5,
        imgName:"",
        price:10000
    },
    {
        id:6,
        imgName:"",
        price:10000
    },
    {
        id:7,
        imgName:"",
        price:10000
    },
    {
        id:8,
        imgName:"",
        price:10000
    }
   
   ]


 let count = 0;
 
function  addToCart(id){
count++;
document.querySelector("#basket").innerText=count; //increasing the number in basket


let img = document.createElement("img");
img.classList.add("basket-img")
let firstDiv = document.createElement("div");
firstDiv.classList.add("col-lg-3","col-sm-4","col-xs-3","card-pricing","cards","none" );

let secondDiv = document.createElement("div");
secondDiv.classList.add("pricing","display")

let h1 = document.createElement("h1");
 
let span = document.createElement("span");

let buy = document.createElement("a");
buy.classList.add("btn","buy-btn","btn-dark");
buy.innerHTML="buy"
buy.href="/buy"
 

let remove = document.createElement("remove");
 
remove.addEventListener("click",removeFromCart)


 ///remove from cart

 function removeFromCart(){ 
  document.getElementById(id).classList.add("not-display")
 if(count>0){
  document.querySelector("#basket").innerText=--count
 }
  if(count===0){
  document.querySelector("#basket-item").classList.remove("basket-displayed");

  }
}



remove.classList.add("btn" ,"remove-btn","btn-dark")
remove.innerHTML="remove"

 
 imagesId.forEach((item) =>{
  if(item.id == id) {
    img.src = "./images/"+ item.imgName+".jpg";
    h1.innerHTML=item.imgName
    span.innerHTML=item.price
} else {
  console.log(id+" "+"is not found")
}
 })


img.alt="image";

firstDiv.id=id
firstDiv.appendChild(img)
firstDiv.appendChild(secondDiv);
secondDiv.appendChild(h1)
secondDiv.appendChild(span)
secondDiv.appendChild(buy)
secondDiv.appendChild(remove)

document.querySelector("#basket-item").appendChild(firstDiv);

 }


   
 


 //displaycart
 
 function displayCart(){
   let items= document.querySelectorAll(".none");
  items.forEach(element => {
    document.querySelector(".none").classList.remove("none")
  });
  if(count!=0){
    document.querySelector("#basket-item").classList.add("basket-displayed");
  }
 
  }
  

  


 


//close cart

function closeCart(){
document.querySelector("#basket-item").classList.remove("basket-displayed");
  document.querySelector("#basket-item").classList.add("none");
}



//back to top

let btn = document.querySelector("#to-top");
window.onscroll = function () {scrollToTop()}
function scrollToTop(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 
