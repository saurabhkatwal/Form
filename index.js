let body=document.querySelector("body");
let form=document.querySelector("form");
let formSection=document.querySelector(".form-section");
let name=form.querySelector("#name");
let email=form.querySelector("#email");
let hobby=form.querySelector("#hobby");
let color=form.querySelector("#color");
let rating=form.querySelector("#rating");
let term=document.querySelector("#term");
//showing the default range value;
document.querySelector(".rating-input span").textContent=rating.value;
let genre="";
function sendValue(value){
    genre=value;
}
//To show the main form again after clicking close button
function showForm(){
    formSection.style.display="block";
}
//displaying the error when an empty value is encountered
function showError(){
    alert('please fill the details carefully');
}
//range value displayer
function showRange(value){
    let label=document.querySelector(".rating-input span");
    label.textContent=value;
}
//function for displaying the modal
function showModal(obj){
//making the main form disappear
formSection.style.display="none";
let section=document.createElement("section");
section.className="modal-section";
let container=document.createElement("div");
container.className="modal-container";
section.appendChild(container);
let button=document.createElement("button");
button.textContent="x";
button.className="remove";
container.appendChild(button);
//creating the close button event listener to close the button
button.addEventListener("click",()=>{
    section.remove();
    showForm();
})
//content addition to the modal
let heading=document.createElement("h1");
heading.innerText=`Hello ${obj.nameValue}`;
container.appendChild(heading);
let list=document.createElement("ul");
let li1=document.createElement("li");
li1.textContent=`Email: ${obj.emailValue}`;
let li2=document.createElement("li");
li2.textContent=`You love: ${obj.hobbyValue}`;
let li3=document.createElement("li");
li3.textContent=`Color: ${obj.colorValue}`;
let li4=document.createElement("li");
li4.textContent=`Rating: ${obj.ratingValue}`;
let li5=document.createElement("li");
li5.textContent=`Book genre: ${obj.genreValue} ${obj.colorValue}`;
let li6=document.createElement("li");
li6.textContent=`👉You agree to terms and conditions`;
list.append(li1,li2,li3,li4,li5,li6);
container.appendChild(list);
body.appendChild(section);
}
//getting the data using form add event listener
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    //adding the data to object
    let obj={};
    obj.nameValue=name.value.trim();
    obj.emailValue=email.value;
    obj.hobbyValue=hobby.value;
    obj.colorValue=color.value;
    obj.ratingValue=rating.value;
    obj.genreValue=genre;
    //checking the checkbox value
    if(term.checked){
        obj.termValue="You agree to terms and conditions";
    }
    else{
        obj.termValue="";
    }
    if(obj.nameValue===""||obj.emailValue===""||obj.hobbyValue===""||obj.ratingValue===""||obj.genreValue===""||obj.termValue===""){
        showError();
        //not allowing the form to submit
        return false;
    }
    //displaying the modal id above condition doesn't execute.
    showModal(obj);
    form.reset();
})