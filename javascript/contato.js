const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const emailRegex = /^\w+([-+]\w+)*@\w+([-.]\w+)*\.\w+([-.]w+)*$/;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index){
    campos[index].style.border = ''; 
}

function nameValidade() {
    if(campos[0].value.length < 3)
    {
        setError(0);  
    }
    else
    {
        removeError(0);
    }
}

function SobreNomeValidade() {
    if(campos[1].value.length < 3)
    {
        setError(1);  
    }
    else
    {
        removeError(1);
    }
}

function CelularValidade() {
    if(campos[2].value.length < 15)
    {
        setError(2);  
    }
    else
    {
        removeError(2);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[3].value))
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidade();
    emailValidate();
    CelularValidade();
    SobreNomeValidade();
}

);



const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
