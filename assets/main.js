//INICIO

(function () {
    var app;
    $(document).ready(function () {
      return app.init();
    });
    app = {
      text: "Hello World. Enjoy this cool typing effect. ",
      index: 0,
      chars: 0,
      speed: 100,
      container: ".text .content",
      init: function () {
        this.chars = this.text.length;
        return this.write();
      },
      write: function () {
        $(this.container).append(this.text[this.index]);
        if (this.index < this.chars) {
          this.index++;
          return window.setTimeout(function () {
            return app.write();
          }, this.speed);
        }
      }
    };
  }.call(this));

// RATING INDEX

$(document).ready(function () {
    /* 1. Visualizing things on Hover - See next part for action on click */
    $("#stars li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on
  
        // Now highlight all the stars that's not after the current hovered star
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            $(this).removeClass("hover");
          });
      });
  
    /* 2. Action to perform on click */
    $("#stars li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently selected
      var stars = $(this).parent().children("li.star");
  
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
      }
  
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
  
      // JUST RESPONSE (Not needed)
      var ratingValue = parseInt(
        $("#stars li.selected").last().data("value"),
        10
      );
      var msg = "";
      if (ratingValue > 1) {
        msg = "Gracias por las " + ratingValue + " Estrellas.";
      } else {
        msg =
          "Lamentamos que nuestro servicio sea considerado de " + ratingValue + " Estrellas.";
      }
      responseMessage(msg);
    });
  });
  
  function responseMessage(msg) {
    $(".success-box").fadeIn(200);
    $(".success-box div.text-message").html("<span>" + msg + "</span>");
  }

// TIENDA
const carrito = [];
const productos = ["objeto1", "objeto2", "objeto3"];

const objeto1 = {id: 1, nombre:"Plan12", precio:4500,};
const objeto2 = {id: 2, nombre:"Plan8", precio:3500,};
const objeto3 = {id: 3, nombre:"PlanOnline", precio:2000,};


const agregarCarrito = document.querySelectorAll("#agregar");

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