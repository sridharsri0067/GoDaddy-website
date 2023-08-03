var username = document.getElementById("username")
var email = document.getElementById("useremail")
var password = document.getElementById("userpassword")
var cpassword = document.getElementById("conformpassword")

    username.addEventListener("focusout" , (obj)=>{
        obj.preventDefault();
        var usernameval = username.value.trim()        
        if(usernameval === ''){
            var e1 = document.getElementById("e1")
            e1.textContent = '*pls enter your name'
        }
        else{
            var e1 = document.getElementById("e1")
            e1.textContent = ''
        }
        obj.stopPropagation();
    })
    
    email.addEventListener("focusout" , (obj)=>{
        obj.preventDefault();
        var emailval = email.value.trim()
        if(emailval === ''){
            var e2 = document.getElementById("e2")
            e2.textContent = '*pls enter your mail - id'
        }
        else{
            var e2 = document.getElementById("e2")
            e2.textContent = ''
        }
        obj.stopPropagation();
    })
    
    password.addEventListener("focusout" , (obj)=>{
        obj.preventDefault();
        var passwordval = password.value.trim()
        if(passwordval === ''){
            var e3 = document.getElementById("e3")
            e3.textContent = '*pls enter your password'
        }
        else if(passwordval.length < 8){
            var e3 = document.getElementById("e3")
            e3.textContent = '*password should be atleast 8 char long'
        }
        else{
            var e3 = document.getElementById("e3")
            e3.textContent = ''
        }
        obj.stopPropagation();
    })
    
    cpassword.addEventListener("focusout" , (obj)=>{
        obj.preventDefault();
        var cpasswordval = cpassword.value.trim()
        var passwordval = password.value.trim()
        if(cpasswordval === ''){
            var e4 = document.getElementById("e4")
            e4.textContent = '*pls enter your conform password'
        }
        else if(cpasswordval !== passwordval){
            var e4 = document.getElementById("e4")
            e4.textContent = '*password does not match'
        }
        else{
            var e4 = document.getElementById("e4")
            e4.textContent = ''
        }
        obj.stopPropagation();
    })
    
    
        var eye1 = document.getElementById("eye1")
        eye1.addEventListener("click" , (obj)=>{
            obj.preventDefault();
            if(password.type == "password"){
                password.type = "text"
                eye1.className = "fa-solid fa-eye-slash"
            }
            else{
                password.type = "password"
                eye1.className = "fa-solid fa-eye"
            }
            obj.stopPropagation();
        })
    
        var eye2 = document.getElementById("eye2")
        eye2.addEventListener("click" , (obj)=>{
            obj.preventDefault();
            if(cpassword.type == "password"){
                cpassword.type = "text"
                eye2.className = "fa-solid fa-eye-slash"
            }
            else{
                cpassword.type = "password"
                eye2.className = "fa-solid fa-eye"
            }
            obj.stopPropagation();
        })



var text = "Lorem ipsum dolor sitha amdgdet consectetur adipisicing elitdia Quibusdam sunita velit voluptatum nelgque cnkbum iure Voluptatum saepe explicabo expedita voluptates ipfdssa debitis deleniti nobis consequatur rerum delectus placeat addgfe facilis"
var str = text.split(" ")

// captcha
var string1 = document.getElementById("captcha")
string1.value = str[Math.round (Math.random() * str.length)]

// type
var string2 = document.getElementById("type")

// refresh
var refresh = document.getElementById("refresh")
refresh.addEventListener("click" , ()=>{
    window.location.reload()
})

// check
var check = document.getElementById("check")
check.addEventListener("click" , (obj)=>{
    obj.preventDefault();
    if(string1.value == string2.value){
        alert("captcha is match")
    }
    else{
        alert("pls enter the valid captcha")
    }
    obj.stopPropagation();
})