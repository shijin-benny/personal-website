var name1
var phone
var email

function checkname() {
    var name = document.getElementById("inputname")
    var val = name.value
    var valid
    var pattern = /^[a-zA-Z-()]*$/
    if (val == "") {
        valid = "required"
        name1 = false
    }
    else if (val.match(pattern)) {
        valid = ""
        name1 = true
    }
    else {
        valid = "invalid name"
        name1 = false
    }
    document.getElementById("error1").innerHTML = valid
}
function checkemail() {
    name1 = false
    var email = document.getElementById("email")
    var val = email.value

    var valid1
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    if (val == "") {
        valid1 = "required"
        name1 = false
    }
    else if (val.match(pattern)) {
        valid1 = ""
        name1 = true
    }
    else {
        valid1 = "invalid email"
        name1 = false
    }
    document.getElementById("error2").innerHTML = valid1
}
function checkphone() {
    name2 = false
    var email = document.getElementById("phone")
    var val = email.value

    var valid2
    var pattern = /^\d{10}$/
    if (val == "") {
        valid2 = "required"
        name2 = false
    }
    else if (val.match(pattern)) {
        valid2 = ""
        name2 = true
    }
    else {
        valid2 = "invalid phone number"
        name2 = false
    }
    document.getElementById("error3").innerHTML = valid2
}

