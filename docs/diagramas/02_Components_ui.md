# 02. Componentes UI

## Objetivo

Documentar los componentes reutilizables del cliente móvil. Estos componentes evitan duplicación, mejoran la consistencia visual y facilitan mantenimiento.

---

## 1. Componentes comunes

Ruta:

```text
src/components/common
```

### `CustomButton.js`

Botón reutilizable para acciones principales y secundarias.

**Responsabilidades:**

- Mostrar CTA táctil.
- Soportar variantes visuales.
- Centralizar estilos de botones.
- Mejorar consistencia de UI.

**Uso típico:**

```jsx
<CustomButton title="Iniciar sesión" onPress={handleLogin} />
```

**Pantallas que lo usan:**

- Login.
- Register.
- Product Detail.
- Cart.
- Checkout.
- Native Features.

---

### `InputField.js`

Campo de entrada reutilizable para formularios.

**Responsabilidades:**

- Capturar texto.
- Mostrar label o placeholder.
- Mantener estilo visual uniforme.
- Usarse en formularios de login/registro.

**Uso típico:**

```jsx
<InputField
  placeholder="Correo electrónico"
  value={email}
  onChangeText={setEmail}
/>
```

---

### `EmptyState.js`

Componente para mostrar estados vacíos.

**Responsabilidades:**

- Informar cuando no hay productos, favoritos, pedidos o carrito.
- Evitar pantallas en blanco.
- Mejorar UX.

**Ejemplos de uso:**

- Carrito vacío.
- Favoritos vacíos.
- Sin pedidos registrados.

---

### `LoadingSpinner.js`

Indicador de carga.

**Responsabilidades:**

- Mostrar que existe una operación asíncrona en curso.
- Usarse al cargar catálogo, carrito o sesión.

---

### `SearchBar.js`

Barra de búsqueda para filtrar productos.

**Responsabilidades:**

- Capturar término de búsqueda.
- Mejorar exploración del catálogo.
- Reducir fricción del usuario.

---

## 2. Componentes Home

Ruta:

```text
src/components/home
```

### `HeroBanner.js`

Banner principal de la pantalla Home.

**Responsabilidades:**

- Presentar la propuesta de valor de la tienda.
- Reforzar identidad visual.
- Dar entrada al catálogo o promociones.

---

### `GamingBanner.js`

Banner temático para productos gaming.

**Responsabilidades:**

- Dar valor visual a la pantalla inicial.
- Resaltar una categoría comercial atractiva.

---

### `PromoBanner.js`

Banner de promociones.

**Responsabilidades:**

- Mostrar ofertas o mensajes comerciales.
- Apoyar innovación visual frente al APF2.

---

### `CategoryPill.js`

Chip de categoría.

**Responsabilidades:**

- Representar filtros o accesos por categoría.
- Mejorar navegación de catálogo.

---

### `QuickActionCard.js`

Tarjeta de acceso rápido.

**Responsabilidades:**

- Llevar al usuario a acciones frecuentes.
- Facilitar navegación desde Home.

---

### `SectionTitle.js`

Título reutilizable para secciones.

**Responsabilidades:**

- Mantener jerarquía visual.
- Evitar repetir estilos de títulos.

---

## 3. Componentes Layout

Ruta:

```text
src/components/layout
```

### `AppHeader.js`

Encabezado reutilizable de la app.

**Responsabilidades:**

- Mostrar título o acciones superiores.
- Reforzar estructura visual.

---

### `ScreenContainer.js`

Contenedor base para pantallas.

**Responsabilidades:**

- Aplicar fondo y márgenes consistentes.
- Controlar área segura.
- Permitir contenido scrollable cuando corresponde.

**Recomendación técnica:**

Usar `SafeAreaView` desde `react-native-safe-area-context`, no desde `react-native`.

---

## 4. Componentes Products

Ruta:

```text
src/components/products
```

### `ProductCard.js`

Tarjeta de producto.

**Responsabilidades:**

- Mostrar imagen, nombre, precio y stock.
- Permitir ir al detalle.
- Permitir agregar al carrito.

**Relación con backend:**

Recibe datos mapeados desde `GET /api/products`.

---

### `ProductList.js`

Lista de productos.

**Responsabilidades:**

- Renderizar colección de productos.
- Delegar cada producto a `ProductCard`.
- Mantener separación entre layout y tarjeta.

---

### `CartItem.js`

Ítem del carrito.

**Responsabilidades:**

- Mostrar producto agregado.
- Incrementar/decrementar cantidad.
- Eliminar producto.
- Mostrar subtotal por ítem.

**Relación con backend:**

Ejecuta acciones que terminan llamando a:

```text
PUT /api/cart
DELETE /api/cart/{idProducto}
```

---

## 5. Criterios de calidad UI

- Componentes pequeños y reutilizables.
- Estilos consistentes con `colors.js` y `theme.js`.
- Acciones claras y visibles.
- Separación entre lógica y presentación.
- Preparado para distintos tamaños de pantalla.
