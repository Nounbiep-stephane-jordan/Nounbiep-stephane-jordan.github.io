 
 const obj = document.querySelector("#toggle");
const heading1 = document.querySelector("#heading-1");
const heading2 = document.querySelector("#heading-2");
const heading3 = document.querySelector("#heading-3");




function toggle(id){
if(id == "Description") {
     obj.innerHTML ="descriptions";  //shows description on click
     heading1.classList.add("active");
     heading2.classList.remove("active");
     heading3.classList.remove("active");
} else if(id == "PhoneDetails") {
    obj.innerHTML ="phone details";  //shows details on click
    heading2.classList.add("active");  //adding color when changed tab
    heading1.classList.remove("active");
    heading3.classList.remove("active");
} else if(id == "Reviews") {
    obj.innerHTML ="phone reviews";  //shows reviews on click
    heading3.classList.add("active"); //adding color when changed tab
    heading2.classList.remove("active");
    heading1.classList.remove("active");

}

}


 