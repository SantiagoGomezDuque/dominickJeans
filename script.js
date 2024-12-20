const damas = [
    { nombre: "Vestido Elegante", precio: "$60", imagen: "https://via.placeholder.com/400x300" },
    { nombre: "Blusa Moderna", precio: "$45", imagen: "https://via.placeholder.com/400x300" },
  ];
  
  const caballeros = [
    { nombre: "Traje Formal", precio: "$120", imagen: "https://via.placeholder.com/400x300" },
    { nombre: "Camisa Casual", precio: "$50", imagen: "https://via.placeholder.com/400x300" },
  ];
  
  function renderProductos(id, productos) {
    const container = document.getElementById(id);
    container.innerHTML = productos
      .map(
        (p) => `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${p.imagen}" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="card-title">${p.nombre}</h5>
            <p>${p.precio}</p>
            <button class="btn btn-outline-dark">Comprar</button>
          </div>
        </div>
      </div>`
      )
      .join("");
  }
  
  function animarProductos() {
    document.querySelectorAll(".card").forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) card.classList.add("visible");
      else card.classList.remove("visible");
    });
  }
  
  document.getElementById("modoOscuro").addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
  });
  
  window.addEventListener("scroll", animarProductos);
  
  renderProductos("damas", damas);
  renderProductos("caballeros", caballeros);
  animarProductos();
  