const fname = document.getElementById("First Name");
const lname = document.getElementById("Last Name");
const phone = document.getElementById("Phone Number");
const email = document.getElementById("Email id");

const data = {
    fname: "",
    lname: "",
    phone: "",
    email: ""
}

function showDataAlert(){
    data.fname = fname.value;
    data.lname = lname.value;
    data.phone = phone.value;
    data.email = email.value;

    alert(`First Name: ${data.fname} Last Name: ${data.lname} Phone Number: ${data.phone} Email ID: ${data.email}`);
}

window.onload = ()=>{
    document.getElementById("MyForm").onsubmit = (e)=>{
        e.preventDefault();
    }
}