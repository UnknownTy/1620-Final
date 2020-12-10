function toggleForm(){
    // This function toggles the form elements.
    let formChildren = document.getElementById('effectForm').children
    console.log(formChildren)
    for(var i = 0; i < formChildren.length; i++){
        formChildren[i].toggleAttribute('hidden')
    }
};

function addImgs(){
    let thumbDiv = document.getElementById('thumb-bar')
    for(var i = 1; i < 6; i++){
        var img = document.createElement('img')
        img.setAttribute("src", `images/pic${i}.jpg`)
        thumbDiv.appendChild(img)
    }
}

addImgs()
toggleForm();