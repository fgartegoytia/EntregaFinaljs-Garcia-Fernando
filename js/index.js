
renderProductos();
renderBotonCarrito();

/*cargar json*/

async function cargarProductos() {
    try {
        const response = await fetch("productos.json"); 
        const productos = await response.json(); 
        guardarProductosLS(productos); 
        renderProductos(); 
        renderBotonCarrito(); 
    } catch (error) {
        console.error("Error al cargar productos:", error); 
    }
}



cargarProductos();
