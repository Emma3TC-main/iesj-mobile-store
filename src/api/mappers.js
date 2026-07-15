const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200";

export const mapUserFromApi = (usuario = {}) => ({
  id: usuario.idUsuario,
  name: usuario.nombre,
  email: usuario.email,
  role: usuario.rol,
});

export const mapProductFromApi = (producto = {}) => ({
  id: producto.idProducto,
  name: producto.nombre,
  description: producto.descripcion || "",
  price: Number(producto.precio || 0),
  stock: Number(producto.stock || 0),
  image: producto.imagen || FALLBACK_IMAGE,
  barcode: producto.codigoBarras || "",
  active: Boolean(producto.estado),
  category: "hardware",
});

export const mapCartFromApi = (cart = {}) => ({
  id: cart.idCarrito,
  subtotal: Number(cart.subtotal || 0),
  items: (cart.items || []).map((item) => ({
    idDetalle: item.idDetalle,
    id: item.idProducto,
    name: item.nombreProducto,
    image: item.imagen || FALLBACK_IMAGE,
    price: Number(item.precioUnitario || 0),
    quantity: Number(item.cantidad || 0),
    subtotal: Number(item.subtotalItem || 0),
  })),
});

export const mapOrderFromApi = (order = {}) => ({
  id: order.idPedido,
  userId: order.idUsuario,
  customerName: order.clienteNombre || "Cliente",
  customerEmail: order.clienteEmail || "",
  date: order.fecha,
  reservationExpiresAt: order.reservaExpiraEn,
  total: Number(order.total || 0),
  status: order.estado,
  paymentStatus: order.estadoPago,
  items: (order.detalles || []).map((item) => ({
    id: item.idProducto,
    name: item.nombreProducto,
    quantity: Number(item.cantidad || 0),
    price: Number(item.precioCompra || 0),
  })),
});
