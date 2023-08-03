let nav = document.getElementById("nav")
nav.addEventListener('click' , ()=>{
    popup.style.display = "none";
    domainblur.style.display = "none";
    hostblur.style.display = "none";
    securblur.style.display = "none";
    mailblur.style.display = "none";
    webproblur.style.display = "none";
    contblur.style.display = "none";
})


let signin = document.getElementById("signin")
let popup = document.getElementById("popup")
popup.style.display = "none";
signin.addEventListener("click" , (obj)=>{
    if(popup.style.display === "none"){
        popup.style.display = "block";

        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        popup.style.display = "none";

        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none"
    }
    obj.stopPropagation();
})
var xmark = document.getElementById("xmark")
xmark.addEventListener("click" , ()=>{
    popup.style.display = "none";
})

//
let domain = document.getElementById("domain")
let domainblur = document.getElementById("domainblur")
domainblur.style.display = "none";
domain.addEventListener("click" , (obj)=>{
    if(domainblur.style.display === "none"){
        domainblur.style.display = "block";

        popup.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        domainblur.style.display = "none";

        popup.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    obj.stopPropagation();
})


//
let hosting = document.getElementById("hosting")
let hostblur = document.getElementById("hostblur")
hostblur.style.display = "none";
hosting.addEventListener("click" , (obj)=>{
    if(hostblur.style.display === "none"){
        hostblur.style.display = "block";

        popup.style.display = "none";
        domainblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        hostblur.style.display = "none";

        popup.style.display = "none";
        domainblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    obj.stopPropagation();
})

//
let security = document.getElementById("security")
let securblur = document.getElementById("securblur")
securblur.style.display = "none";
security.addEventListener('click' , (obj)=>{
    if(securblur.style.display === "none"){
        securblur.style.display = "block";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        securblur.style.display = "none";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    obj.stopPropagation();
})

//
let mail = document.getElementById("email")
let mailblur = document.getElementById("mailblur")
mailblur.style.display = "none";
mail.addEventListener('click' , (obj)=>{
    if(mailblur.style.display === "none"){
        mailblur.style.display = "block";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        mailblur.style.display = "none";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        webproblur.style.display = "none";
        contblur.style.display = "none";
    }
    obj.stopPropagation();
})

//
let forweb = document.getElementById("forweb")
let webproblur = document.getElementById("webproblur")
webproblur.style.display = "none";
forweb.addEventListener('click' , (obj)=>{
    if(webproblur.style.display === "none"){
        webproblur.style.display = "block";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        contblur.style.display = "none";
    }
    else{
        webproblur.style.display = "none";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        contblur.style.display = "none";
    }
    obj.stopPropagation();
})

//
let contact = document.getElementById("contact")
let contblur = document.getElementById("contblur")
contblur.style.display = "none";
contact.addEventListener('click' , (obj)=>{
    if(contblur.style.display === "none"){
        contblur.style.display = "block";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
    }
    else{
        contblur.style.display = "none";

        popup.style.display = "none";
        domainblur.style.display = "none";
        hostblur.style.display = "none";
        securblur.style.display = "none";
        mailblur.style.display = "none";
        webproblur.style.display = "none";
    }
    obj.stopPropagation();
})

addEventListener('scroll' , (obj)=>{
    popup.style.display = "none";
    domainblur.style.display = "none";
    hostblur.style.display = "none";
    securblur.style.display = "none";
    mailblur.style.display = "none";
    webproblur.style.display = "none";
    contblur.style.display = "none";

    obj.stopPropagation();
})


let btn1 = document.getElementById("btn1");
let arrow1 = document.getElementById("arrow1");
btn1.addEventListener('mouseenter' , ()=>{
    arrow1.style.display = "inline-block";
    btn1.addEventListener('mouseleave' , ()=>{
        arrow1.style.display = "none";
    })
})

let btn2 = document.getElementById("btn2");
let arrow2 = document.getElementById("arrow2");
btn2.addEventListener('mouseenter' , ()=>{
    arrow2.style.display = "inline-block";
    btn2.addEventListener('mouseleave' , ()=>{
        arrow2.style.display = "none";
    })
})












let btn3 = document.getElementById("btn3");
let arrow3 = document.getElementById("arrow3");
btn3.addEventListener('mouseenter' , ()=>{
    arrow3.style.display = "inline-block";
    btn3.addEventListener('mouseleave' , ()=>{
        arrow3.style.display = "none";
    })
})