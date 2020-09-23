let miCarrito = [];
let pedidos = [];
let consolita = [];

async function enCarrito() {
  var response = await pedidos.length;
  return response;
}

async function countRepetidos(param) {
  var ped = 0;
  pedidos.forEach((element) => {
    if (param === element.name) {
      ped += 1;
    }
  });
  return ped;
}
async function getPedidos() {
  var response = await pedidos;
  return pedidos;
}
async function getEnCarrito() {
  enCarrito()
    .then((data) => {
      const carrito = document.getElementById("enCarrito");
      carrito.textContent = data + " items";
    })
    .catch((err) => {
      console.log(err);
    });
}

async function getTacos() {
  var response = await fetch("productos.json");
  return response.json();
}
async function taquitos() {
  getTacos().then((data) => {
    const categoria = document.getElementById("categorias");
    categoria.textContent = "Tacos";
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());
    for (let i = 0; i < data[1].products.length; i++) {
      let col = document.createElement("div");
      col.className = "col";
      let card = document.createElement("div");
      card.className = "card";

      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = data[1].products[i].image;

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = data[1].products[i].name;

      let cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = data[1].products[i].description;

      let cardPrice = document.createElement("h6");
      cardPrice.className = "card-text";
      cardPrice.innerText = data[1].products[i].price + "$";

      let cardButon = document.createElement("a");
      cardButon.className = "btn btn-primary";
      cardButon.innerText = "Add to car";
      cardButon.onclick = function () {
        pedidos.push(data[1].products[i]);
        getEnCarrito();
      };

      cardBody.append(cardTitle);
      cardBody.append(cardDescription);
      cardBody.append(cardPrice);
      cardBody.append(cardButon);
      card.append(cardImg);
      card.append(cardBody);
      col.append(card);
      productosDiv.append(col);
    }
  });
}

async function getSalad() {
  var response = await fetch("productos.json");
  return response.json();
}
async function saladita() {
  getSalad().then((data) => {
    const categoria = document.getElementById("categorias");
    categoria.textContent = "Salads";
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());

    for (let i = 0; i < data[2].products.length; i++) {
      let col = document.createElement("div");
      col.className = "col";
      let card = document.createElement("div");
      card.className = "card";

      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = data[2].products[i].image;

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = data[2].products[i].name;

      let cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = data[2].products[i].description;

      let cardPrice = document.createElement("h6");
      cardPrice.className = "card-text";
      cardPrice.innerText = data[2].products[i].price + "$";

      let cardButon = document.createElement("a");
      cardButon.className = "btn btn-primary";
      cardButon.innerText = "Add to car";
      cardButon.onclick = function () {
        pedidos.push(data[2].products[i]);
        getEnCarrito();
      };

      cardBody.append(cardTitle);
      cardBody.append(cardDescription);
      cardBody.append(cardPrice);
      cardBody.append(cardButon);
      card.append(cardImg);
      card.append(cardBody);
      col.append(card);
      productosDiv.append(col);
    }
  });
}

fetch("productos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showJson(data);
  })
  .catch(function (err) {
    console.log(err);
  });

showJson = (data) => {
  const productosDiv = document.getElementById("printcard");
  productosDiv.querySelectorAll("*").forEach((n) => n.remove());
  for (let i = 0; i < data[0].products.length; i++) {
    let col = document.createElement("div");
    col.className = "col";
    let card = document.createElement("div");
    card.className = "card";

    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = data[0].products[i].image;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = data[0].products[i].name;

    let cardDescription = document.createElement("p");
    cardDescription.className = "card-text";
    cardDescription.innerText = data[0].products[i].description;

    let cardPrice = document.createElement("h6");
    cardPrice.className = "card-text";
    cardPrice.innerText = data[0].products[i].price + "$";

    let cardButon = document.createElement("a");
    cardButon.className = "btn btn-primary";
    cardButon.innerText = "Add to car";
    cardButon.onclick = function () {
      pedidos.push(data[0].products[i]);
      getEnCarrito();
    };

    cardBody.append(cardTitle);
    cardBody.append(cardDescription);
    cardBody.append(cardPrice);
    cardBody.append(cardButon);
    card.append(cardImg);
    card.append(cardBody);
    col.append(card);
    productosDiv.append(col);
  }
};

async function getPostres() {
  var response = await fetch("productos.json");
  return response.json();
}
async function postres() {
  getPostres().then((data) => {
    const categoria = document.getElementById("categorias");
    categoria.textContent = "Desserts";
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());
    for (let i = 0; i < data[3].products.length; i++) {
      let col = document.createElement("div");
      col.className = "col";
      let card = document.createElement("div");
      card.className = "card";

      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = data[3].products[i].image;

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = data[3].products[i].name;

      let cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = data[3].products[i].description;

      let cardPrice = document.createElement("h6");
      cardPrice.className = "card-text";
      cardPrice.innerText = data[3].products[i].price + "$";

      let cardButon = document.createElement("a");
      cardButon.className = "btn btn-primary";
      cardButon.innerText = "Add to car";
      cardButon.onclick = function () {
        pedidos.push(data[3].products[i]);
        getEnCarrito();
      };

      cardBody.append(cardTitle);
      cardBody.append(cardDescription);
      cardBody.append(cardPrice);
      cardBody.append(cardButon);
      card.append(cardImg);
      card.append(cardBody);
      col.append(card);
      productosDiv.append(col);
    }
  });
}

async function getBebidas() {
  var response = await fetch("productos.json");
  return response.json();
}
async function bebidas() {
  getBebidas().then((data) => {
    const categoria = document.getElementById("categorias");
    categoria.textContent = "Drinkins & Sides";
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());
    for (let i = 0; i < data[4].products.length; i++) {
      let col = document.createElement("div");
      col.className = "col";
      let card = document.createElement("div");
      card.className = "card";

      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = data[4].products[i].image;

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = data[4].products[i].name;

      let cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = data[4].products[i].description;

      let cardPrice = document.createElement("h6");
      cardPrice.className = "card-text";
      cardPrice.innerText = data[4].products[i].price + "$";

      let cardButon = document.createElement("a");
      cardButon.className = "btn btn-primary";
      cardButon.innerText = "Add to car";
      cardButon.onclick = function () {
        pedidos.push(data[4].products[i]);
        getEnCarrito();
      };

      cardBody.append(cardTitle);
      cardBody.append(cardDescription);
      cardBody.append(cardPrice);
      cardBody.append(cardButon);
      card.append(cardImg);
      card.append(cardBody);
      col.append(card);
      productosDiv.append(col);
    }
  });
}

async function getHamburguesas() {
  var response = await fetch("productos.json");
  return response.json();
}
async function burguer() {
  getHamburguesas().then((data) => {
    const categoria = document.getElementById("categorias");
    categoria.textContent = "Burgers";
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());
    for (let i = 0; i < data[0].products.length; i++) {
      let col = document.createElement("div");
      col.className = "col";
      let card = document.createElement("div");
      card.className = "card";

      let cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = data[0].products[i].image;

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerText = data[0].products[i].name;

      let cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = data[0].products[i].description;

      let cardPrice = document.createElement("h6");
      cardPrice.className = "card-text";
      cardPrice.innerText = data[0].products[i].price + "$";

      let cardButon = document.createElement("a");
      cardButon.className = "btn btn-primary";
      cardButon.innerText = "Add to car";
      cardButon.onclick = function () {
        pedidos.push(data[0].products[i]);
        getEnCarrito();
      };
      cardBody.append(cardTitle);
      cardBody.append(cardDescription);
      cardBody.append(cardPrice);
      cardBody.append(cardButon);
      card.append(cardImg);
      card.append(cardBody);
      col.append(card);
      productosDiv.append(col);
    }
  });
}

async function listCarrito() {
  getPedidos().then((data) => {
    const productosDiv = document.getElementById("printcard");
    productosDiv.querySelectorAll("*").forEach((n) => n.remove());
    let table = document.createElement("table");
    table.className =
      "table table-striped d-flex justify-content-center w-100 p-3";
    let thread = table.createTHead();
    let tr1 = table.insertRow();
    let dict = ["Id", "Qty", "Description", "Price", "Amount"];
    dict.forEach((element) => {
      let th1 = document.createElement("th");
      th1.textContent = element;
      th1.className = "col-4";
      tr1.append(th1);
    });
    for (let i = 0; i < pedidos.length; i++) {
      let contadorCarrito = contarRepetidos(pedidos[i].name);

      if (contiene(pedidos[i].name) == false) {
        miCarrito.push(pedidos[i]);
        let tr2 = table.insertRow();
        let td1 = document.createElement("th");
        td1.className = "col-4";
        td1.textContent = i;
        let td2 = document.createElement("td");
        td2.className = "col-4";
        td2.textContent = contadorCarrito;
        let td3 = document.createElement("td");
        td3.className = "col-4";
        td3.textContent = pedidos[i].name;
        let td4 = document.createElement("td");
        td4.className = "col-4";
        td4.textContent = pedidos[i].price + "$";
        let td5 = document.createElement("td");
        td5.textContent = contadorCarrito * pedidos[i].price + "$";
        td5.className = "col-4";
        tr2.append(td1);
        tr2.append(td2);
        tr2.append(td3);
        tr2.append(td4);
        tr2.append(td5);

        let obje = {
          item: i,
          quantity: contadorCarrito,
          description: pedidos[i].name,
          unitPrice: pedidos[i].price,
        };
        consolita.push(obje);
      }
    }
    productosDiv.append(table);

    let cot = document.createElement("div");
    cot.className = "container w-100 p-3";
    let rowsit = document.createElement("div");
    rowsit.className = "row";
    let cost = document.createElement("div");
    cost.className = "col";
    cost.textContent = "Total: $";
    let cancel = document.createElement("div");
    cancel.className = "col d-flex justify-content-end ";
    let botcancel = document.createElement("button");
    botcancel.style.backgroundColor = "red";
    botcancel.textContent = "Cancel";
    botcancel.onclick = function () {
      var txt;
      if (confirm("Are you sure about cancelling the order!")) {
        txt = "You pressed OK!";
        pedidos = [];
        miCarrito = [];
        getEnCarrito();
        listCarrito();
        consolita();
      } else {
        txt = "You pressed Cancel!";
      }
    };
    let buy = document.createElement("div");
    buy.className = "col";
    let buybut = document.createElement("button");
    buybut.style.backgroundColor = "pink";
    buybut.textContent = "Confirm order";
    buybut.onclick = function () {
      console.log(consolita);
      pedidos = [];
      miCarrito = [];
      consolita = [];
      getEnCarrito();
      listCarrito();
    };
    cancel.append(botcancel);
    buy.append(buybut);
    rowsit.append(cost);
    rowsit.append(cancel);
    rowsit.append(buy);
    cot.append(rowsit);
    productosDiv.append(cot);
  });
}

async function contarRepetidos(param) {
  let contador = 0;
  pedidos.forEach((element) => {
    if (pedidos.name === param) {
      contador += 1;
    }
  });
  return contador;
}

function contarRepetidos(param) {
  var contador = 0;
  pedidos.forEach((element) => {
    if (element.name === param) {
      ++contador;
    }
  });
  return contador;
}
function contiene(param) {
  var bol = false;
  miCarrito.forEach((element) => {
    if (element.name === param) {
      bol = true;
    }
  });
  return bol;
}
