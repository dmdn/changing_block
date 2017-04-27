document.getElementById("btn").addEventListener('click', function() {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var color = document.getElementById("color").value;
    var widthB = document.getElementById("widthB").value;
    var typeB = document.getElementById("typeB").value;
    var сolorB = document.getElementById("сolorB").value;

    var div = document.createElement('div');
    div.className = "block";
    document.body.appendChild(div);
    div.style.cssText="position: absolute; \
        left: 380px; \
        top: 210px; \
    ";

    div.style.width = width +'px';
    div.style.height = height +'px';
    div.style.backgroundColor = color;
    div.style.border = widthB+'px '+typeB+' '+сolorB;
})
    
document.getElementById("reset").addEventListener('click', function() {
    document.getElementById("width").value = '';
    document.getElementById("height").value = '';
    document.getElementById("color").value = '';
    document.getElementById("widthB").value = '';
    document.getElementById("typeB").value = '';
    document.getElementById("сolorB").value = '';    
    var block = document.getElementsByClassName('block')[0];
    if (block) {
        block.remove();
    } else {
        alert('Создайте элемент');
    }    
})