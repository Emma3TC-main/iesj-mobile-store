# 08. Configuración de entorno mobile

## Requisitos

- Node.js LTS.
- npm.
- Expo CLI mediante `npx`.
- Android Studio Emulator o celular físico con Expo/development build.
- Backend corriendo en `http://localhost:8080` o IP local.

## Instalación

```bash
npm install
```

## Variables de entorno

Crear `.env` en la raíz de `mobile-client`:

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:8080/api
```

### Si usas emulador Android

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:8080/api
```

### Si usas celular físico

Usar la IP local de la computadora donde corre el backend:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.10:8080/api
```

## Ejecutar en modo desarrollo

```bash
npx expo start -c
```

## Ejecutar en Android

```bash
npx expo run:android
```

## Development build recomendada

Para probar funciones nativas con menos limitaciones:

```bash
npx expo install expo-dev-client
npx expo run:android
npx expo start --dev-client -c
```

## Dependencias principales

| Dependencia | Uso |
|---|---|
| `expo` | Framework base. |
| `react-native` | UI nativa. |
| `@react-navigation/native` | Navegación. |
| `@react-navigation/native-stack` | Stack navigation. |
| `@react-navigation/bottom-tabs` | Tabs inferiores. |
| `axios` | Cliente HTTP. |
| `@react-native-async-storage/async-storage` | Persistencia local. |
| `expo-camera` | Cámara. |
| `expo-location` | GPS. |
| `expo-notifications` | Notificaciones. |
| `react-native-safe-area-context` | Áreas seguras. |

## Configuración nativa en `app.json`

```json
"android": {
  "package": "com.iesj.mobile.store",
  "permissions": [
    "android.permission.CAMERA",
    "android.permission.ACCESS_FINE_LOCATION",
    "android.permission.ACCESS_COARSE_LOCATION",
    "android.permission.POST_NOTIFICATIONS"
  ]
}
```

## Limpieza de caché

```bash
npx expo start -c
```

## Problemas comunes

### No conecta al backend

Verificar:

- Backend iniciado.
- URL correcta en `.env`.
- Móvil y PC en la misma red si usas celular físico.
- CORS configurado en backend.

### Compra exitosa pero sin notificación

Verificar:

- Permisos de notificación activados.
- Canal de Android configurado.
- Probar con development build.

### Warning de SafeAreaView

Usar:

```js
import { SafeAreaView } from "react-native-safe-area-context";
```

No usar `SafeAreaView` desde `react-native`.
