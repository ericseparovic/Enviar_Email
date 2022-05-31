// HTML element selection
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')


// Events
email.addEventListener('blur', getData)
asunto.addEventListener('blur', getData)
mensaje.addEventListener('blur', getData)

//Get data from HTML 
function getData(e) {
    
    const data = {
        email: "",
        asunto: "",
        mensaje: ""
    }
    
    data.email = email.value
    data.asunto = asunto.value
    data.mensaje = mensaje.value

    validation(data)

}


function validation(data){
    const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    const {email, asunto, mensaje} = data

    if(er.test(email)){
        console.log('correo valido')
    } else {
        console.log('invalido')
    }
}


