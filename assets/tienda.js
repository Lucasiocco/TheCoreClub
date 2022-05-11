// TIENDA
const carrito = [];
const productos = ["objeto1", "objeto2", "objeto3"];

const objeto1 = {id: 1, tittle:"Plan12", price:4500,};
const objeto2 = {id: 2, tittle:"Plan8", price:3500,};
const objeto3 = {id: 3, tittle:"PlanOnline", price:2000,};


const agregarCarrito = document.querySelectorAll(".addToCart");
const tbody = document.querySelector("tbody");

function confirmacion() {
    swal({
        title: "Felicidades!",
        text: "Agregaste un item al carrito!",
        icon: "success",
      })
};

function confirmacionCompra() {
    swal("Finalizar la compra?", {
        buttons: ["No", "Si"],
      });
}

agregarCarrito.forEach(addToCart => {
  addToCart.addEventListener("click", () => addToCarrito());
  addToCart.addEventListener("click", () => confirmacion());
});

function addToCarrito(){
    const itemId = [objeto1.id];
    const itemTittle = [objeto1.tittle];
    const itemPrice = [objeto1.price];

    const newItem = {
        id: itemId,
        tittle: itemTittle,
        price: itemPrice,
        cantidad: 1,
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    carrito.push(newItem)

    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ""
    carrito.innerHTML = ""
    carrito.map(item => {
        const tr = document.createElement("tr")
        tr.classList.add("ItemCarrito")
        const Content = `
        
        <td class:"table__id">${item.id}</td>
        <td class:"table__tittle">${item.tittle}</td>
        <td class="table__cantidad">${item.cantidad}</td>
        <td class="table__price">${item.price}</td>

      `
      tr.innerHTML = Content;
      tbody.append(tr);
    })
}



  // MODAL COMPRA
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");
  
  var span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }