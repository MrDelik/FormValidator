# FormValidator
FormValidator is a simple ES6 class to validate form with the [HTML5 Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation). It allows the user to customize validation messages sended by the API or to add new ones.

##Instanciation
It's made as a ES6 module so you juse need to import it in your file and instanciate it with the new keyword

```javascript
import FormValidator from './components/FormValidator.js';

const validator = new FormValidator({options});
```

##Parameters
FormValidator was made to let the user a maximum of freedom and letting him to use the UI he wants. For that there is some parameters that he can use.
* invalidClass : `string` 
    * class used on the input parent to set the error mode
* parentSelector : `string`
    * Selector of the input parent
* messageContainerSelector : `string`
    * Selector of the error message container
* avoidedTypes : `string[]`
    * Input avoided types. Types not verified by the validator
* beforeValidate : `callable`
    * Function triggered before the validation append
    
##Methods
FormValidator contains 3 methods but you must use only one of them.
* validate : Form `HTMLFormElement` : return `int`
    * function used to validate the form. Take the form element as argument
* setErrorMode : field `HTMLInputElement`, message `string` : return `void`
    * set the error mode of the field by adding the class to its parent
* removeErrormode : field `HTMLInputElement` : return `void`
    * remove the error mode of the field by removing the class to its parent

##Customization
You can customize messages shown by the validation API. For that you just have to set up the message as data attributes in the input.

Keep in mind the respect error name case. To do a camel case with the dataset API you need to use **-**
Example :
```HTML
<input type="text" data-value-missing="yourMessage" required>
```
`data-value-missing` for `dataset.valueMissing`


###Author
**Kevin Goyvaerts**
+ [http://github.com/MrDeliK](http://github.com/MrDeliK)