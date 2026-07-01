# 06. API Services

## Objetivo

Documentar la capa de comunicación HTTP entre el cliente móvil y el backend REST.

## Ruta

```text
src/api
```

## Archivos

| Archivo | Responsabilidad |
|---|---|
| `apiClient.js` | Cliente Axios centralizado. |
| `authApi.js` | Endpoints de autenticación. |
| `productsApi.js` | Endpoints de catálogo. |
| `cartApi.js` | Endpoints de carrito. |
| `ordersApi.js` | Endpoints de pedidos. |
| `paymentsApi.js` | Endpoints de pagos. |
| `mappers.js` | Normaliza respuestas del backend al formato usado por UI. |

---

## `apiClient.js`

Responsabilidades:

- Configurar `baseURL` desde variable de entorno.
- Agregar header `Authorization` cuando existe token.
- Centralizar manejo de errores HTTP.
- Evitar duplicar lógica de Axios en pantallas.

Variable esperada:

```env
EXPO_PUBLIC_API_URL=http://TU_IP_LOCAL:8080/api
```

Ejemplo para emulador Android:

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:8080/api
```

Ejemplo para celular físico en la misma red:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.10:8080/api
```

---

## `authApi.js`

Endpoints relacionados:

```text
POST /auth/register
POST /auth/login
GET  /auth/me
```

Responsabilidad:

- Registrar usuario.
- Iniciar sesión.
- Validar token guardado.

---

## `productsApi.js`

Endpoints relacionados:

```text
GET /products
GET /products/{id}
```

Responsabilidad:

- Cargar catálogo.
- Cargar detalle de producto.
- Pasar productos por mapper.

---

## `cartApi.js`

Endpoints relacionados:

```text
GET    /cart
PUT    /cart
DELETE /cart/{idProducto}
DELETE /cart/clear
```

Responsabilidad:

- Obtener carrito actual.
- Agregar o actualizar productos.
- Eliminar productos.
- Vaciar carrito.

---

## `ordersApi.js`

Endpoints relacionados:

```text
POST /orders
GET  /orders
GET  /orders/{id}
```

Responsabilidad:

- Crear pedido desde carrito.
- Obtener historial de pedidos.
- Obtener detalle de pedido.

---

## `paymentsApi.js`

Endpoints relacionados:

```text
POST /payments
```

Responsabilidad:

- Invocar pago simulado cuando el flujo lo requiera.

---

## `mappers.js`

Responsabilidad:

- Transformar nombres de propiedades del backend a nombres usados por UI.
- Evitar que las pantallas dependan directamente de la forma exacta del backend.

Ejemplo conceptual:

```text
idProducto → id
nombreProducto → name
precioUnitario → price
cantidad → quantity
```

## Manejo de errores

Los errores HTTP deben transformarse en mensajes entendibles para la UI.

Ejemplos:

| Error | Mensaje esperado |
|---|---|
| 401 | Sesión vencida o token inválido. |
| 400 | Datos inválidos. |
| 404 | Recurso no encontrado. |
| 500 | Error del servidor. |

## Relación con rúbrica

Esta capa demuestra integración real con API REST/JWT, manejo de errores y separación entre UI y datos.
