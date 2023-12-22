//acessando o formulario com nome cadostro e depois
//acessando o elemento do formulario name
const inputName = document.forms.cadastro.name;

//inputName ==> componente input do html localizado no form
// nome da função que vai ser chamada pelo addEventListener
//nome do evento keyup 
inputName.addEventListener("keyup", handleInputNameKeyup);

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener("change", handleInputEmailChange);



function handleInputNameKeyup(event) {
    console.log(event.target.value);
}

//peganando o valor do input
//event.target.value
function handleInputEmailChange(event) {
    if (validateEmail(event.target.value)) {
        //Removendo a class css de erro
        event.target.classList.remove("input-error");
    } else {
        //Alterando a class do css
        //para destacar que o e-mail contem um tipo de erro
        event.target.classList.add("input-error");
    }
}

//acionando o botão submit do form
const btnSubmit = document.querySelector('[type="submit"]');
btnSubmit.addEventListener("click", handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
    //evita o comportamento padrão de evia os dados do formulario
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}


//Valida o e-mail
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}