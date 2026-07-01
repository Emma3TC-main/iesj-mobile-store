# 03. Pantallas mobile

## Objetivo

Documentar las pantallas principales del cliente móvil y su relación con navegación, contextos, servicios y backend.

---

## 1. Auth Screens

Ruta:

```text
src/screens/auth
```

### `LoginScreen.js`

Pantalla de inicio de sesión.

**Responsabilidades:**

- Capturar email y contraseña.
- Validar campos básicos.
- Llamar a `login()` desde `AuthContext`.
- Mostrar errores de autenticación.
- Redirigir al flujo autenticado si el login es correcto.

**Backend relacionado:**

```text
POST /api/auth/login
GET  /api/auth/me
```

---

### `RegisterScreen.js`

Pantalla de registro.

**Responsabilidades:**

- Capturar nombre, email y contraseña.
- Validar datos mínimos.
- Registrar usuario.
- Permitir volver a login.

**Backend relacionado:**

```text
POST /api/auth/register
```

---

## 2. Home

Ruta:

```text
src/screens/home/HomeScreen.js
```

### `HomeScreen.js`

Pantalla inicial del usuario autenticado.

**Responsabilidades:**

- Mostrar banners, promociones y accesos rápidos.
- Reforzar identidad visual de iESJ Mobile Store.
- Facilitar navegación a catálogo, carrito o funciones nativas.

---

## 3. Products

Ruta:

```text
src/screens/products
```

### `CatalogScreen.js`

Pantalla de catálogo.

**Responsabilidades:**

- Consumir productos desde backend.
- Mostrar buscador.
- Renderizar lista de productos.
- Permitir navegar a detalle.

**Backend relacionado:**

```text
GET /api/products
```

---

### `ProductDetailScreen.js`

Detalle de producto.

**Responsabilidades:**

- Mostrar información técnica del producto.
- Mostrar precio, stock e imagen.
- Permitir agregar al carrito.

**Backend relacionado:**

```text
GET /api/products/{id}
PUT /api/cart
```

---

## 4. Cart

Ruta:

```text
src/screens/cart
```

### `CartScreen.js`

Pantalla del carrito.

**Responsabilidades:**

- Mostrar productos agregados.
- Modificar cantidades.
- Eliminar productos.
- Mostrar total.
- Navegar a checkout.

**Backend relacionado:**

```text
GET    /api/cart
PUT    /api/cart
DELETE /api/cart/{idProducto}
DELETE /api/cart/clear
```

---

### `CheckoutScreen.js`

Pantalla de confirmación de compra.

**Responsabilidades:**

- Mostrar resumen final.
- Confirmar compra.
- Crear pedido en backend.
- Programar notificación local.
- Redirigir a historial de pedidos.

**Backend relacionado:**

```text
POST /api/orders
```

**Funcionalidad nativa relacionada:**

```text
expo-notifications
```

---

## 5. Favorites

Ruta:

```text
src/screens/favorites/FavoritesScreen.js
```

### `FavoritesScreen.js`

Pantalla de favoritos.

**Responsabilidades:**

- Mostrar productos guardados localmente como favoritos.
- Permitir quitar favoritos.
- Mejorar experiencia de exploración.

**Persistencia relacionada:**

```text
favoritesStorage.js
AsyncStorage
```

---

## 6. Profile

Ruta:

```text
src/screens/profile
```

### `ProfileScreen.js`

Pantalla de perfil.

**Responsabilidades:**

- Mostrar datos del usuario autenticado.
- Permitir cerrar sesión.
- Dar acceso al historial.

**Contexto relacionado:**

```text
AuthContext
```

---

### `OrdersScreen.js`

Historial de pedidos.

**Responsabilidades:**

- Listar pedidos del usuario.
- Mostrar fecha, estado y total.
- Permitir revisar compras realizadas.

**Backend relacionado:**

```text
GET /api/orders
GET /api/orders/{id}
```

---

## 7. Native Features

Ruta:

```text
src/screens/native/NativeFeaturesScreen.js
```

### `NativeFeaturesScreen.js`

Pantalla de capacidades nativas.

**Responsabilidades:**

- Activar cámara con `expo-camera`.
- Solicitar ubicación con `expo-location`.
- Calcular distancia a tienda de referencia.
- Programar notificación local con `expo-notifications`.

**Valor para rúbrica:**

Cumple el criterio de funcionalidades nativas al integrar cámara, GPS y notificaciones con gestión de permisos.
