var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var  formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData)
     
    }
    resetForm();
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
    var cel15 = newRow.insertCell(4);
        ce115.innerHTML ="<button>Edit)</button>  <button>Delete</button>"
        
}

//Editar datos 

function onEdit(td){

    selectedRow = td.parentElement.parentElement;
   document.getElementById ('codigoProducto').value = selectedRow.cells [0] .innerHTML;
    document.getElementById ('Producto') .value = selectedRow.cells [1] .innerHTML;
    document.getElementById ('Cantidad') .value = selectedRow.cells [2] .innerHTML;
   document.getElementById ( 'Precio'). value selectedRow.cells [3] .innerHTML;

}

function updateRecord ( formData ) {
    selectedRow.cells [0].innerHTML= codigoProducto;
    selectedRow.cells [1].innerHTML= formData.Producto;
    selectedRow.cells [2].innerHTML= formData.Precio;
    selectedRow.cells [3].innerHTML= formData.Cantidad;

}
 
//Borrar datos

function onDelete(td){
    if (confirm("Seguro que quieres borrar?")){
        row= td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
}

//Reset datos 

function resetForm(){
    document.getElementById("codigoProducto").value = "";
    document.getElementById("Producto").value = "";
    document.getElementById("Cantidad").value = "";
    document.getElementById("Precio").value = "";
}