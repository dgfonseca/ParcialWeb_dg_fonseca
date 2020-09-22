fetch('https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  showJson = productos =>
  {
      const productosDiv = document.querySelector('#printcard');
      productos.array.forEach(producto => {
          const productoElement = document.createElement('p');
          productoElement.innerText = 'Nombre Producto: ${producto.name}';
          productosDiv.append(productoElement);
          
      });
      
  }

