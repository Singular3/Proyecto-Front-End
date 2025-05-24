import React, { useState, useEffect } from 'react';
import llamadosProducts from '../services/llamadosProducts';

function AdminComponent() {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [horarios, setHorarios] = useState('');
  const [productos, setProductos] = useState([]); // Estado para manejar los productos
  const [editando, setEditando] = useState(null); // Para saber si estamos editando un producto

  // Cargar productos (cuando el componente se monta)
  useEffect(() => {
    const cargarProductos = async () => {
      const productosCargados = await llamadosProducts.getProducts(); // Suponiendo que tienes un método para obtener los productos
      setProductos(productosCargados);
    };
    cargarProductos();
  }, []);

  // Manejo de cambios en los campos de formulario
  function cargarnombre(evento) {
    setNombre(evento.target.value);
  }

  function cargardireccion(evento) {
    setDireccion(evento.target.value);
  }

  function cargarhorarios(evento) {
    setHorarios(evento.target.value);
  }

  // Registrar o editar producto
  const registrar = async () => {
    if (editando) {
      // Si estamos editando, actualizar producto
      await llamadosProducts.updateProduct(editando.id, nombre, direccion, horarios); // Suponiendo que la función updateProduct exista
      setEditando(null); // Limpiar el estado de edición
    } else {
      // Si no estamos editando, agregar un nuevo producto
      await llamadosProducts.postProducts(nombre, direccion, horarios);
    }

    // Limpiar campos y actualizar lista
    setNombre('');
    setDireccion('');
    setHorarios('');
    const productosCargados = await llamadosProducts.getProducts();
    setProductos(productosCargados);
  };

  // Eliminar producto
  const eliminarProducto = async (id) => {
    await llamadosProducts.deleteProducts(id); // Suponiendo que tienes un método para eliminar un producto
    const productosCargados = await llamadosProducts.getProducts();
    setProductos(productosCargados);
  };

  // Editar producto
  const editarProducto = (producto) => {
    setNombre(producto.nombre);
    setDireccion(producto.direccion);
    setHorarios(producto.horarios);
    setEditando(producto); // Establecemos el producto a editar
  };

  return (
    <div>
      <h1>Registro de Centros de Compostaje</h1>

      <label htmlFor="nombre">Nombre del Centro:</label>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={cargarnombre}
      /><br />

      <label htmlFor="direccion">Dirección del Centro:</label>
      <input
        type="text"
        name="direccion"
        value={direccion}
        onChange={cargardireccion}
      /><br />

      <label htmlFor="horarios">Horarios de Funcionamiento:</label>
      <input
        type="time"
        name="horarios"
        value={horarios}
        onChange={cargarhorarios}
      /><br />

      <button onClick={registrar}>{editando ? 'Actualizar Centro' : 'Registrar Centro'}</button>

      <h2>Centros Registrados</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <p>{producto.nombre} - {producto.direccion} - {producto.horarios}</p>
            <button onClick={() => editarProducto(producto)}>Editar</button>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminComponent;

