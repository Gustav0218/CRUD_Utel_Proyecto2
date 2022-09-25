var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var  formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else {

    }
}

//Datos//
function readFormData() {
    var formData = {};
    formData["codigoProducto"] = document.getElementById(codigoProducto).value;
    formData["Producto"] = document.getElementById(Producto).value;
    formData["Cantidad"] = document.getElementById(Cantidad).value;
    formData["Precio"] = document.getElementById(Precio).value;
    return formData;
}

//Insertar Datos

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.codigoProducto;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Producto;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Cantidad;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Precio;  
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML ="<button>Edit</button>  <button>Delete</button>" 



}