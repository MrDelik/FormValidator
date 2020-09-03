/**
 * Form Validator use the HTML5 Form Validation Api
 * Allow us to custom errors messages based on the api
 * and where those messages are displayed and of course, their language
 *
 * If the beforeValidate specified function is used to do some custom validation and return a integer
 * this integer will be used as starting number of error for the validation
 *
 * The custom messages used are verified in the form data attributes.
 * If there is no data attribute with the error message, the default message is used
 */
class FormValidator{
    constructor( params = {} ){
        this.params = {
            invalidClass: 'invalid',
            parentSelector: '.input-container',
            messageContainerSelector: '.feedback .text',
            avoidedTypes: ['button', 'submit', 'hidden', 'checkbox', 'radio'],
            beforeValidate: undefined
        };

        for(let param in params){
            if( param in this.params ){
                this.params[param] = params[param];
            }
        }
    }

    /**
     * Validate the form and return the number of errors
     * @param form
     * @returns {number}
     */
    validate( form ){
        let errors = 0;

        if( typeof this.params.beforeValidate === 'function' ){
            let result = this.params.beforeValidate();

            if( Number.isInteger(result) ){
                errors = result;
            }
        }

        form.querySelectorAll('input, select').forEach(field => {
            if( !this.params.avoidedTypes.includes( field.type ) ){
                if( !field.checkValidity() ){
                    errors++;
                    for(var errorType in field.validity){
                        if( field.validity[errorType] === true ){
                            break;
                        }
                    }

                    let message;
                    if( errorType in field.dataset ){
                        message = field.dataset[errorType];
                    }
                    else if( errorType in form.dataset ){
                        message = form.dataset[errorType];
                    }
                    else{
                        message = field.validationMessage;
                    }

                    this.setErrorMode( field, message );
                }
                else{
                    this.removeErrorMode(field);
                }
            }
        });

        return errors;
    }

    /**
     * Set the error mode of a field
     * @param field
     * @param message
     */
    setErrorMode( field, message ){
        let parent = field.closest( this.params.parentSelector );
        parent.classList.add( this.params.invalidClass );
        parent.querySelector( this.params.messageContainerSelector ).textContent = message;
    }

    /**
     * Remove the error mode of a field
     * @param field
     */
    removeErrorMode(field){
        let parent = field.closest( this.params.parentSelector );
        parent.classList.remove( this.params.invalidClass );
        parent.querySelector(this.params.messageContainerSelector).textContent = '';
    }
}

export default FormValidator;
