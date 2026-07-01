# 07. Funciones nativas

## Objetivo

Documentar las funcionalidades nativas implementadas en el cliente móvil APF3.

## Archivo principal

```text
src/screens/native/NativeFeaturesScreen.js
```

## Servicios relacionados

```text
src/services/notificationService.js
```

## Librerías utilizadas

| Librería | Uso |
|---|---|
| `expo-camera` | Acceso a cámara. |
| `expo-location` | Acceso a GPS/ubicación. |
| `expo-notifications` | Notificaciones locales. |

---

## 1. Cámara

### Propósito

Preparar un flujo de escáner de productos o QR promocional.

### Implementación

- Se usa `CameraView`.
- Se solicita permiso con `useCameraPermissions()`.
- Si el permiso es concedido, se muestra la cámara dentro de la pantalla.

### Flujo

```text
Usuario pulsa Activar cámara
  → App solicita permiso
  → Usuario acepta
  → Se renderiza CameraView
```

### Valor APF3

Permite demostrar integración con hardware del dispositivo.

---

## 2. GPS / Ubicación

### Propósito

Calcular la distancia del usuario a una tienda de referencia.

### Implementación

- Se usa `Location.requestForegroundPermissionsAsync()`.
- Se obtiene ubicación con `Location.getCurrentPositionAsync()`.
- Se calcula distancia con fórmula Haversine.

### Tienda de referencia

```text
iESJ Store - Lima Centro
Latitud:  -12.0464
Longitud: -77.0428
```

### Flujo

```text
Usuario pulsa Calcular ubicación
  → App solicita permiso de ubicación
  → Obtiene coordenadas actuales
  → Calcula distancia
  → Muestra resultado en pantalla
```

### Valor APF3

Agrega valor diferencial al e-commerce: ubicación de tienda cercana.

---

## 3. Notificaciones locales

### Propósito

Mostrar confirmación de compra o alerta demo después de una acción.

### Implementación

- Se solicita permiso de notificación.
- Se programa una notificación local.
- Se usa después del checkout exitoso.

### Flujo

```text
Compra exitosa
  → scheduleOrderNotification(orderId)
  → Solicitar permiso si falta
  → Programar notificación
  → Usuario recibe alerta local
```

### Recomendación técnica

Para Android moderno, usar permiso:

```json
"android.permission.POST_NOTIFICATIONS"
```

Para pruebas completas de notificaciones se recomienda usar una development build en lugar de depender solamente de Expo Go.

---

## 4. Configuración sugerida en `app.json`

```json
{
  "expo": {
    "android": {
      "permissions": [
        "android.permission.CAMERA",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.POST_NOTIFICATIONS"
      ]
    },
    "plugins": [
      "expo-camera",
      "expo-location",
      "expo-notifications"
    ]
  }
}
```

## 5. Criterios de aceptación

- [ ] La cámara solicita permisos y se muestra correctamente.
- [ ] La ubicación solicita permisos y calcula distancia.
- [ ] La notificación local se programa después de compra o prueba demo.
- [ ] Si el usuario rechaza permisos, la app muestra un mensaje entendible.

