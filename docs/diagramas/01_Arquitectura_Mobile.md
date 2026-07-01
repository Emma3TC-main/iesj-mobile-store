# 01. Arquitectura mobile

## Objetivo

Documentar la arquitectura del cliente móvil **iESJ Mobile Store**, desarrollado con **Expo**, **React Native**, **React Navigation**, **Context API**, **Axios**, **AsyncStorage** y funcionalidades nativas de Expo.

## Enfoque arquitectónico

La app está organizada en capas para separar responsabilidades:

```text
Presentation Layer
  Screens + UI Components
        ↓
Navigation Layer
  Stack + Bottom Tabs
        ↓
State Layer
  Context API + Custom Hooks
        ↓
Data Layer
  API Services + Mappers + Storage
        ↓
Backend REST / Native APIs
```

## Estructura principal

```text
mobile-client/
├── App.js
├── app.json
├── package.json
├── src/
│   ├── api/             # Cliente HTTP y endpoints REST
│   ├── components/      # Componentes reutilizables de UI
│   ├── constants/       # Colores, tema y datos mock auxiliares
│   ├── context/         # Estado global con Context API
│   ├── hooks/           # Hooks de acceso a contextos y datos
│   ├── navigation/      # Stack y Bottom Tabs
│   ├── screens/         # Pantallas principales
│   ├── services/        # Storage local y notificaciones
│   ├── styles/          # Estilos compartidos
│   └── utils/           # Validaciones y utilidades
└── docs/
```

## Capas aplicadas

### 1. UI Layer

Incluye:

```text
src/screens/
src/components/
src/styles/
```

Responsabilidad:

- Mostrar información al usuario.
- Capturar eventos táctiles.
- Renderizar catálogo, carrito, checkout y perfil.
- Mantener coherencia visual.

### 2. Navigation Layer

Incluye:

```text
src/navigation/AppNavigator.js
src/navigation/AuthNavigator.js
src/navigation/BottomTabs.js
```

Responsabilidad:

- Separar flujo autenticado y no autenticado.
- Gestionar Stack Navigator para pantallas profundas.
- Gestionar Bottom Tabs para módulos principales.

### 3. State Layer

Incluye:

```text
src/context/
src/hooks/
```

Responsabilidad:

- Mantener sesión del usuario.
- Mantener carrito sincronizado con backend.
- Mantener favoritos.
- Mantener historial de pedidos.

### 4. Data Layer

Incluye:

```text
src/api/
src/services/
src/utils/
```

Responsabilidad:

- Consumir API REST.
- Inyectar JWT automáticamente.
- Mapear respuestas backend al formato de UI.
- Persistir token o datos locales.
- Gestionar notificaciones locales.

### 5. Native Layer

Incluye:

```text
expo-camera
expo-location
expo-notifications
```

Responsabilidad:

- Solicitar permisos.
- Activar cámara.
- Obtener ubicación.
- Programar notificación local.

## Flujo principal de datos

```text
Pantalla → Context/Hook → API Service → Backend REST
Backend REST → API Service → Mapper → Context → Pantalla
```

Ejemplo de carrito:

```text
ProductCard
  → addToCart(product)
  → CartContext
  → cartApi.updateCartRequest()
  → PUT /api/cart
  → CartResponse
  → mapper
  → cartItems
  → CartScreen
```

## Beneficios

- Estructura limpia y modular.
- Navegación definida con Stack y Tabs.
- Separación entre pantallas, componentes, hooks, contextos y servicios.
- Consumo real de backend con JWT.
- Uso de cámara, GPS y notificaciones.
- Diseño adaptable y consistente.
