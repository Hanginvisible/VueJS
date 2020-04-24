function opentNavBar() {
    var x = document.getElementById("sidebar-nav");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openMenu() {
    var x = document.getElementById("home");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function openItem() {
    var x = document.getElementById("item");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function openItem2() {
    var x = document.getElementById("item2");
    if (x.style.display === "block" || x.style.display === "") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function checkRequired(val) {
    if (!val || val == '') return {
        status: false,
        message: 'This is required field'
    };
    return {
        status: true
    };;
}

function validate(id) {
    var element = document.getElementById(id);
    //todo: check required
    var cheked = this.checkRequired(element.value);
    element.classList.remove('invalid');
    var errorElement = document.getElementById('err-' + id);

    if (errorElement) errorElement.remove();

    if (!cheked.status) {
        element.classList.add('invalid');
        if (!errorElement) {
            var err = document.createElement('p');
            err.id = 'err-' + id;
            err.innerHTML = cheked.message;
            err.classList.add('err-message');
            element.parentNode.append(err);
        }
    }
}

function add() {
    var newId = this.newId();
    // onblur="validate(' + newId + ')" validate id="' + newId + '"
    var textInput = '<input  class="input-value" id="' + newId + '" type="text">';
    var removeBtn = '<button onclick="remove(' + newId + ')" class="input-btn"><i class="fa fa-close"></i></button>';
    var html = '<div class="input-sub">' + textInput + removeBtn + '</div>'

    var newElement = document.createElement('div');
    newElement.innerHTML = html;
    newElement.id = 'div-' + newId;
    var currentElement = document.getElementById("input-wrapper");
    currentElement.append(newElement);
}

function remove(id) {
    debugger
    var currentElement = document.getElementById('div-' + id);
    if (currentElement) currentElement.remove();
}

function clearAll() {
    var currentElement = document.getElementById("input-wrapper");
    if (currentElement) currentElement.innerHTML = '';
}

function clearContent() {
    var elements = document.getElementsByClassName('input-value');
    if (!elements || elements.length == 0) return;
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

function newId() {
    return new Date().getUTCMilliseconds();
}

function getInputValues() {
    debugger
    var elements = document.getElementsByClassName('input-value');
    if (!elements || elements.length == 0) return [];
    var response = [];
    for (var i = 0; i < elements.length; i++) {
        response.push({
            id: elements[i].id,
            value: elements[i].value
        });
    }
    return response;
}

function addImg() {
    var newId = this.newId();
    var img = '<img src="#" id ="img' + newId + '" class ="input-value-file">';
    var inputImg = '<input type="file" id="filetag" name="filetag" onchange="changeimage(this,' + "'img" + newId + "'" + ')"><br><br>';
    var deleteImg = '<button onclick="removeImg(' + newId + ')" class="input-btn"><i class="fa fa-close"></i></button>';
    var deltePre = '<button onclick =removePre(' + "'img" + newId + "'" + ')>Delete Preview</button>';
    var html = '<div class ="input-file-sub">' + img + inputImg + deleteImg + deltePre + '</div>';

    var newElement = document.createElement('div');
    newElement.innerHTML = html;
    newElement.id = newId;
    var currentElement = document.getElementById("input-file-wrapper");
    currentElement.append(newElement);
}

function changeimage(input, id) {
    var reader;
    // var fileTag = document.getElementById("filetag"),
    var imageTag = document.getElementById(id);
    console.log(imageTag);
    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            imageTag.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function removeAll() {
    var currentElement = document.getElementById("input-file-wrapper");
    if (currentElement) currentElement.innerHTML = "";
}

function removeImg(id) {
    debugger
    var currentElement = document.getElementById(id);
    if (currentElement) currentElement.remove();
}
function removePre(id) {
    debugger
    var currentElement = document.getElementById(id)
    if (currentElement) currentElement.src = "";
}
function clearInput() {
    debugger
    var elements = document.getElementsByClassName('input-value-file');
    if (!elements || elements.length == 0) return;
    for (var i = 0; i < elements.length; i++) {
        elements[i].src = "";
    }
}
function submit() {
    var elements = document.getElementsByClassName('input-value');
    if (!elements || elements.length == 0) {
        alert('item not match');
        return;
    }
    var response = [];
    for (var i = 0; i < elements.length; i++) {
        response.push({
            id: elements[i].id,
            value: elements[i].value
        });
    }

    var items = document.getElementsByClassName('input-value-file');
    if (!items || items.length == 0) {
        return alert('item not match');
    }
    var response2 = [];
    for (var i = 0; i < items.length; i++) {
        response2.push({
            id: items[i].id,
            value: items[i].src
        });
    }

    if (elements.length == items.length) {
        var html = '';
        for (var i = 0; i < response.length; i++) {
            var title = '<div class="img-wrapper"><label class="img-title" id ="' + response[i].id + '">' + response[i].value + '</label>';
            var content = '<img src="' + response2[i].value + '" id ="img' + response2[i].id + '" class ="input-value-file"/></div>';
            html += title + content;
        }
        var currentElement = document.getElementById('content-wrapper');
        currentElement.innerHTML = html;

    } else {
        alert('item not match');
    }
}
// `${}`