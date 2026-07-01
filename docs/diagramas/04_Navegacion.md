# 04. Navegación mobile

## Objetivo

Documentar el árbol de navegación del cliente móvil.

## Librerías usadas

```text
@react-navigation/native
@react-navigation/native-stack
@react-navigation/bottom-tabs
```

## Archivos principales

| Archivo | Responsabilidad |
|---|---|
| `AppNavigator.js` | Decide si mostrar flujo auth o flujo autenticado. |
| `AuthNavigator.js` | Stack de login/registro. |
| `BottomTabs.js` | Tabs principales del usuario autenticado. |

## Árbol de navegación

```text
App.js
└── NavigationContainer
    └── AppNavigator
        ├── AuthNavigator
        │   ├── LoginScreen
        │   └── RegisterScreen
        └── MainStack
            ├── BottomTabs
            │   ├── HomeScreen
            │   ├── CatalogScreen
            │   ├── CartScreen
            │   ├── FavoritesScreen
            │   ├── NativeFeaturesScreen
            │   └── ProfileScreen
            ├── ProductDetailScreen
            ├── CheckoutScreen
            └── OrdersScreen
```

## Flujo no autenticado

```text
LoginScreen ↔ RegisterScreen
```

El usuario ingresa con email/password o crea una cuenta. Si el login es correcto, `AuthContext` actualiza el estado global y el `AppNavigator` cambia al flujo principal.

## Flujo autenticado

```text
Home / Catalog / Cart / Favorites / Native / Profile
```

Las pestañas inferiores permiten moverse entre módulos principales sin perder contexto.

## Pantallas profundas

Las pantallas como detalle de producto y checkout se manejan como Stack para permitir navegación hacia adelante y atrás.

```text
CatalogScreen → ProductDetailScreen
CartScreen → CheckoutScreen → OrdersScreen
```

## Justificación técnica

- Stack Navigator se usa para flujos jerárquicos.
- Bottom Tabs se usa para módulos principales.
- Esta combinación facilita una experiencia móvil intuitiva.
- La navegación está separada de la lógica de negocio.
