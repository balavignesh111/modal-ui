const btn_one = document.getElementById("btn-one");

const btn_two = document.getElementById("btn-two");

const btn_three = document.getElementById("btn-three");

const btn = document.querySelectorAll('.btn-container button');
console.log(btn);
const box = document.querySelector(".content-bg");

const close_icon = document.getElementById("close-icon");
console.log(close_icon)

function close(){
  box.style.display = "none";
}
function open(){
  box.style.display = "block";
}

// to select a button from a container
for(let i=0;i<btn.length;i++){
  btn[i].addEventListener('click',open);
  close_icon.addEventListener('click',close);
}

document.addEventListener('keydown',(event)=>{
  console.log(event);
  if(event.key === "Escape" && (box.style.display === "block")){
    close();
  }
})

document.addEventListener('click',(event)=>{
  console.log(event);
  if(event.target.classList.contains("content-bg")){
    close();
  }
})