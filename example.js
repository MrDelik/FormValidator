import FormValidator from "./components/FormValidator";

let validator = new FormValidator();


function testValidator(e){
    e.preventDefault();

    let errors = validator.validate(e.target);

    if( errors > 0 ){
        alert('There are some errors');
    }
    else{
        alert('There is no error');
    }
}
document.getElementById('testForm').addEventListener('submit', testValidator);