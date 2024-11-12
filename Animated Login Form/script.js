function validateLoginForm() {
    var username = document.getElementById("loginUsername");
    var password = document.getElementById("loginPassword");

    if (username.value.trim() === "") {
        username.classList.add("error");
        username.placeholder = "This field is empty";
    } else {
        username.classList.remove("error");
    }

    if (password.value.trim() === "") {
        password.classList.add("error");
        password.placeholder = "This field is empty";
    } else {
        password.classList.remove("error");
    }
    console.log(username.value.trim());
    console.log(password.value.trim());
}

function validateSignUpForm() {
    var email = document.getElementById("signUpEmail");
    var username = document.getElementById("signUpUsername");
    var password = document.getElementById("signUpPassword");
    if (email.value.trim() === "") {
        email.classList.add("error");
        email.placeholder = "This field is empty";
    } else {
        email.classList.remove("error");
    }
    if (username.value.trim() === "") {
        username.classList.add("error");
        username.placeholder = "This field is empty";
    } else {
        username.classList.remove("error");
    }
    if (password.value.trim() === "") {
        password.classList.add("error");
        password.placeholder = "This field is empty";
    } else {
        password.classList.remove("error");
    }
    console.log(email.value.trim());
    console.log(username.value.trim());
    console.log(password.value.trim());
}
function toggleDivs() {
    const div1 = document.getElementById('loginin');
    const div2 = document.getElementById('signup');

    if (div1.style.opacity === '0') {
        div1.style.opacity = '1';
        div1.style.transform = 'translateY(0)';
        div2.style.opacity = '0';
        div2.style.transform = 'translateY(-30%)';
        div1.style.zIndex = 1;
        document.getElementById("signUpUsername").value = ""
        document.getElementById("signUpEmail").value = ""
        document.getElementById("signUpPassword").value = ""
        
        
    } else {
        div1.style.zIndex = 0;
        div1.style.opacity = '0';
        div1.style.transform = 'translateY(30%)';
        div2.style.opacity = '1';
        div2.style.transform = 'translateY(0)';
        document.getElementById("loginUsername").value = ""
        document.getElementById("loginPassword").value = ""
        
    }
}

var loginEyeIcon = document.getElementById("toggleLoginPassword");

loginEyeIcon.addEventListener("mousedown", function () {
    var password = document.getElementById("loginPassword");
    password.setAttribute("type", "text");
    this.setAttribute("style", "cursor: grabbing");
});
loginEyeIcon.addEventListener("mouseup", function () {
    var password = document.getElementById("loginPassword");
    password.setAttribute("type", "password");
    this.setAttribute("style", "cursor: grab");
});

var signEyeIcon = document.getElementById("toggleSignUpPassword");

signEyeIcon.addEventListener("mousedown", function () {
    var password = document.getElementById("signUpPassword");
    password.setAttribute("type", "text");
    this.setAttribute("style", "cursor: grabbing");
});
signEyeIcon.addEventListener("mouseup", function () {
    var password = document.getElementById("signUpPassword");
    password.setAttribute("type", "password");
    this.setAttribute("style", "cursor: grab");
});