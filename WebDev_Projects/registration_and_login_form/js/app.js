const submit_button = document.querySelector(".button");

submit_button.addEventListener("click", submit);

function submit(e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem("FirstName", fname);
    localStorage.setItem("LastName", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);
    localStorage.setItem("Cpassword", cpass);

    if (fname == "") {
        Swal.fire("Opps!", "First name cannot be empty!", "error");
    } else if (lname == "") {
        Swal.fire("Opps..!", "Last name field cannot be empty!", "error");
    } else if (email == "") {
        Swal.fire("Opps..!", "Email field cannot be empty!", "error");
    } else if (pass == "") {
        Swal.fire("Opps..!", "Password field cannot be empty!", "error");
    } else if (pass.length < 6) {
        Swal.fire(
            "Opps..!",
            "Password must have minimum 6 characters!",
            "error"
        );
    } else if (pass.length > 20) {
        Swal.fire(
            "Opps..!",
            "Password must have maximum 20 characters!",
            "error"
        );
    } else if (pass.length >= 6 && pass.length < 20) {
        if (cpass == "") {
            Swal.fire("Opps..!", "You must confirm your password!", "error");
        } else if (pass !== cpass) {
            Swal.fire("Opps..!", "Password not matching!", "error");
        } else if (pass == cpass) {
            Swal.fire(
                "Good job!",
                "You are successfuly registered!",
                "success"
            );
            setTimeout(() => {
                location.href = "login.html";
            }, 2000);
        } else {
            Swal.fire("Opps..!", "Something went wrong, try again!", "error");
        }
    }
}


// login function

const login = document.querySelector(".login");

// icons

var visibility = false;

function toggle() {
    if (visibility) {
        document.getElementById("pass").setAttribute("type", "password");
        visibility = false;
    } else {
        document.getElementById("pass").setAttribute("type", "text");
        visibility = true;
    }
}

function toggle1() {
    if (visibility) {
        document.getElementById("cpass").setAttribute("type", "password");
        visibility = false;
    } else {
        document.getElementById("cpass").setAttribute("type", "text");
        visibility = true;
    }
}

function toggle2() {
    if (visibility) {
        document.getElementById("passWord").setAttribute("type", "password");
        visibility = false;
    } else {
        document.getElementById("passWord").setAttribute("type", "text");
        visibility = true;
    }
}

let loginButton = document.getElementById("login-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");

let text = "";

//Generate text
const textGenerator = () => {
    let generatedText = "";

    for (let i = 0; i < 3; i++) {
        generatedText += String.fromCharCode(randomNumber(65, 90));

        generatedText += String.fromCharCode(randomNumber(97, 122));

        generatedText += String.fromCharCode(randomNumber(48, 57));
    }

    return generatedText;
};

const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

function drawStringOnCanvas(string) {
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];

    const letterSpace = 150 / string.length;

    for (let i = 0; i < string.length; i++) {
        const xInitialSpace = 25;

        ctx.font = "20px Roboto Mono";

        ctx.fillStyle = textColors[randomNumber(0, 1)];

        ctx.fillText(
            string[i],
            xInitialSpace + i * letterSpace,
            randomNumber(25, 40),
            100
        );
    }
}

const triggerFunction = () => {
    userInput.value = "";
    text = textGenerator();

    text = [...text].sort(() => Math.random() - 0.5).join("");

    drawStringOnCanvas(text);
};

reloadButton.addEventListener("click", triggerFunction);

window.onload = () => triggerFunction();

login.addEventListener("click", check);

function check() {
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (emailAddress == "") {
        Swal.fire("Opps..!", "Email address field has no value!", "error");
    } else if (passWord == "") {
        Swal.fire("Opps..!", "Password field has no value!", "error");
    } else if (userInput.value == "") {
        swal.fire(
            "Captcha input field is empty",
            "Please enter the text in the image",
            "error"
        );
    } else if (emailAddress !== Email || passWord !== Password) {
        Swal.fire(
            "Opps..!",
            "Your Password or Email address is incorrect!",
            "error"
        );
    } else if (userInput.value !== text) {
        swal.fire("Wrong captcha", "Try again!!", "error");
    } else {
        Swal.fire("Good job!", "You successfuly logged in!", "success");
    }
}









