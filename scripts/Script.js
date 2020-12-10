function hideForm(){
    // This function hides the form elements.
    let formChildren = document.getElementById('effectForm').children
    console.log(formChildren)
    for(var i = 0; i < formChildren.length; i++){
        formChildren[i].toggleAttribute('hidden', true)
    }
};

hideForm();