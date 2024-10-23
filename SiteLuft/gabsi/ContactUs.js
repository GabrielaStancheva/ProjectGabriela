function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


const serviceID = "service_loawl1c";
const templateID = "template_u62ajkb";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Вашето съобщение беше изпратено успешно")
    })
.catch((err) => console.log(err));
}