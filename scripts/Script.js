let thumbDiv = document.getElementById('thumb-bar')
function hideForm(){
    // This function toggles the form elements.
    let formChildren = document.getElementById('effectForm').children

    for(var i = 0; i < formChildren.length; i++){
        formChildren[i].toggleAttribute('hidden', true)
    }
};
function revealForm(){
    // This function toggles the form elements.
    let formChildren = document.getElementById('effectForm').children
    for(var i = 0; i < formChildren.length; i++){
        formChildren[i].toggleAttribute('hidden', false)
    }
};

function addImgs(){
    
    for(var i = 1; i < 6; i++){
        var img = document.createElement('img')
        img.setAttribute("src", `images/pic${i}.jpg`)
        thumbDiv.appendChild(img)
    }
}
thumbDiv.addEventListener('mouseover', function(e){
    revealForm()
    var img = e.target.attributes[0].nodeValue
    var display = document.getElementsByClassName('displayed-img')[0]
    display.toggleAttribute('hidden', false)
    display.setAttribute('src', img)
})
addImgs()
hideForm();