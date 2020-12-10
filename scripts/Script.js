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

let formButton = document.getElementsByTagName('button')[0]
formButton.onclick = function(){
    var usrInput = document.getElementById('effect').value
    document.getElementById('effect').value = ""
    var display = document.getElementsByClassName('displayed-img')[0]
    if(usrInput.toLowerCase() === "blur"){
        var img = display.attributes['src'].nodeValue
        var imgBlur = img.slice(0, 11) + 'B' + img.slice(11)
        display.setAttribute('src', imgBlur)
    } else {
        alert("Unrecognized Effect. Try 'Blur'")
    }
    return false //Must return false to ensure page does not refresh.
}
addImgs()
hideForm();