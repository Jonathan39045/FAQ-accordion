let minus_1 = document.querySelector("#minus_1");
let minus_2 = document.querySelector("#minus_2");
let minus_3 = document.querySelector("#minus_3");
let minus_4 = document.querySelector("#minus_4");
let para_1 = document.querySelector("#para_1");
let para_2 = document.querySelector("#para_2");
let para_3 = document.querySelector("#para_3");
let para_4 = document.querySelector("#para_4");
let plus_1 = document.querySelector("#plus_1");
let plus_2= document.querySelector("#plus_2")
let plus_3= document.querySelector("#plus_3")
let plus_4= document.querySelector("#plus_4")

plus_1.addEventListener("click", (event) => {
    event.preventDefault();
    if (para_1.style.display === "none" || para_1.style.display === "") {
        para_1.style.display = "block";
        plus_1.src = "./assets/images/icon-minus.svg"
    } else {
        para_1.style.display = "none";
        plus_1.src = "./assets/images/icon-plus.svg"
    }
});

plus_2.addEventListener("click",(event)=>{
    event.preventDefault();
    if(para_2.style.display==="none" || para_2.style.display==="")
    {
        para_2.style.display="block";
        plus_2.src = "./assets/images/icon-minus.svg"
    }
    else {
        para_2.style.display = "none";
        plus_2.src = "./assets/images/icon-plus.svg"
    }
});


plus_3.addEventListener("click",(event)=>{
    event.preventDefault();
    if(para_3.style.display==="none" || para_3.style.display==="")
    {
        para_3.style.display="block";
        plus_3.src = "./assets/images/icon-minus.svg"
    }
    else {
        para_3.style.display = "none";
        plus_3.src = "./assets/images/icon-plus.svg"
    }
});

plus_4.addEventListener("click",(event)=>{
    event.preventDefault();
    if(para_4.style.display==="none" || para_4.style.display==="")
    {
        para_4.style.display="block";
        plus_4.src = "./assets/images/icon-minus.svg"
    }
    else {
        para_4.style.display = "none";
        plus_4.src = "./assets/images/icon-plus.svg"
    }
});


