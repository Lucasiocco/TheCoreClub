// TIENDA
const carrito = [];
const productos = ["objeto1", "objeto2", "objeto3"];

const objeto1 = {id: 1, nombre:"Plan12", precio:4500,};
const objeto2 = {id: 2, nombre:"Plan8", precio:3500,};
const objeto3 = {id: 3, nombre:"PlanOnline", precio:2000,};


const agregarCarrito = document.querySelectorAll("#agregar");

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

agregarCarrito.forEach(btn => {
    btn.addEventListener("click", () => console.log("#agregar"))
});

function addToCarrito(e){
    const buttonC = e.target;
    const item = buttonC.closest(".card");
    const itemTittle = item.querySelector(".card__tittle").textContent;
    const itemPrice = item.querySelector(".card__price").textContent;

    const newItem = {
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
        
        <th scope="row">1</th>
        <td class:"table__tittle">${item.tittle}</td>
        <td class="table__cantidad">${item.cantidad}</td>
        <td class="table__price">${item.price}</td>

      `
      tr.innerHTML = Content;
      tbody.append(tr);
    })
}