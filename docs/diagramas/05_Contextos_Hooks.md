# 05. Contextos y hooks

## Objetivo

Documentar cómo la app maneja estado global usando Context API y hooks personalizados.

## Contextos

Ruta:

```text
src/context
```

### `AuthContext.js`

Responsabilidad:

- Guardar usuario autenticado.
- Guardar/restaurar token JWT.
- Ejecutar login/register/logout.
- Validar sesión al iniciar app.

Servicios relacionados:

```text
authApi.js
authStorage.js
apiClient.js
```

Flujo:

```text
LoginScreen → AuthContext.login() → authApi.loginRequest() → Backend → AsyncStorage → AppNavigator
```

---

### `CartContext.js`

Responsabilidad:

- Mantener `cartItems`.
- Consultar carrito del backend.
- Agregar producto.
- Incrementar/decrementar cantidades.
- Eliminar productos.
- Calcular total.

Servicios relacionados:

```text
cartApi.js
```

Flujo:

```text
ProductCard → addToCart() → CartContext → PUT /api/cart → cartItems actualizado
```

---

### `FavoritesContext.js`

Responsabilidad:

- Guardar productos favoritos.
- Persistir favoritos localmente.
- Mejorar UX sin depender del backend.

Servicio relacionado:

```text
favoritesStorage.js
```

---

### `OrdersContext.js`

Responsabilidad:

- Consultar historial de pedidos.
- Mantener listado de órdenes del usuario.
- Sincronizar con backend después del checkout.

Servicio relacionado:

```text
ordersApi.js
```

---

## Hooks personalizados

Ruta:

```text
src/hooks
```

| Hook | Retorna | Uso |
|---|---|---|
| `useAuth.js` | Contexto de autenticación. | Login, register, logout, usuario. |
| `useCart.js` | Contexto de carrito. | Agregar, quitar, total, cantidades. |
| `useFavorites.js` | Contexto de favoritos. | Marcar/quitar favoritos. |
| `useOrders.js` | Contexto de pedidos. | Historial y recarga de pedidos. |
| `useProducts.js` | Estado de productos. | Catálogo y filtros. |

## Beneficio arquitectónico

En vez de pasar datos por props entre muchas pantallas, la app usa Context API y hooks. Esto reduce el acoplamiento y mejora la claridad del código.

## Relación con la rúbrica

- Separación lógica correcta.
- Reutilización de estado global.
- Código más mantenible.
- Integración clara con backend.
