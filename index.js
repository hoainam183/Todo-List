const input = document.querySelector("input");
const list = document.querySelector("ul");
const add = document.querySelector("button");
const container = document.querySelector(".container");

// Add
const handleAdd = (todo) => {
  const li = document.createElement("li");
  li.innerText = `${todo}`;
  list.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.append(span)
  saveData()
};

input.addEventListener("change", (e) => {    
  handleAdd(e.target.value);
  e.target.value = "";
  saveData()
});

list.addEventListener("click",function (e) {
    // console.log(e.target.tagName);
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data",list.innerHTML);
}

function getData() {
    list.innerHTML = localStorage.getItem("data");
}

getData();
// Remove
