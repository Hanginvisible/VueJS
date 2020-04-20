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
    var textInput = '<input onblur="validate(' + newId + ')" validate id="' + newId + '" class="input-value" type="text">';
    var removeBtn = '<button onclick="remove(' + newId + ')" class="input-btn"><i class="fa fa-close"></i></button>';
    var html = '<div class="input-sub">' + textInput + removeBtn + '</div>'

    var newElement = document.createElement('div');
    newElement.innerHTML = html;
    newElement.id = 'div-' + newId;
    var currentElement = document.getElementById("input-wrapper");
    currentElement.append(newElement);
}

function remove(id) {
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
    var elements = document.getElementsByClassName('input-value');
    if (!elements || elements.length == 0) return [];
    var response = [];
    for (var i = 0; i < elements.length; i++) {
        response.push({
            id: elements[i].id,
            value: elements[i].value
        });
    }
    console.log(response);
    return response;
}
