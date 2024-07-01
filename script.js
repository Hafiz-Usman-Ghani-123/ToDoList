const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const listBox = document.querySelector("#list-box");

btn.addEventListener("click", () => {
     if (text.value == "") {
       alert("Please Enter something");
     } else {
       let textValue = text.value;
       let createLI = document.createElement("li");
       createLI.append(textValue);
       listBox.append(createLI);
     } 
});
 
