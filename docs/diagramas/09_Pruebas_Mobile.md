# 09. Pruebas mobile

## Objetivo

Validar que el cliente móvil cumpla los criterios APF3: navegación, integración backend, JWT, UI/UX y funciones nativas.

## 1. Prueba de arranque

```bash
npx expo start -c
```

Criterio:

- La app compila sin error fatal.
- Se muestra pantalla de login o home según sesión.

## 2. Login

Pasos:

1. Abrir app.
2. Ingresar email y contraseña.
3. Pulsar iniciar sesión.

Criterio:

- Login correcto.
- Se navega a tabs principales.
- Token queda guardado.

## 3. Registro

Pasos:

1. Ir a registro.
2. Ingresar nombre, email y contraseña.
3. Crear cuenta.

Criterio:

- Usuario creado.
- No se muestra contraseña.
- Puede iniciar sesión.

## 4. Catálogo

Pasos:

1. Entrar a catálogo.
2. Revisar productos.
3. Buscar un producto.
4. Abrir detalle.

Criterio:

- Productos cargan desde backend.
- Imágenes, nombres, precios y stock son visibles.

## 5. Carrito

Pasos:

1. Agregar producto.
2. Ir al carrito.
3. Incrementar cantidad.
4. Disminuir cantidad.
5. Eliminar producto.

Criterio:

- Carrito se sincroniza con backend.
- Total se recalcula correctamente.

## 6. Checkout

Pasos:

1. Agregar producto.
2. Ir a checkout.
3. Confirmar compra.

Criterio:

- Backend crea pedido.
- Pedido queda `PAGADO`.
- Carrito se vacía.
- Se muestra mensaje de éxito.
- Se programa notificación local si hay permisos.

## 7. Historial de pedidos

Pasos:

1. Ir a perfil o pedidos.
2. Revisar historial.

Criterio:

- La compra reciente aparece con total y estado.

## 8. Cámara

Pasos:

1. Ir a Funciones nativas.
2. Pulsar Activar cámara.
3. Aceptar permiso.

Criterio:

- Se muestra vista de cámara.

## 9. Ubicación

Pasos:

1. Ir a Funciones nativas.
2. Pulsar Calcular ubicación.
3. Aceptar permiso.

Criterio:

- Se muestra latitud/longitud.
- Se calcula distancia a tienda.

## 10. Notificación

Pasos:

1. Ir a Funciones nativas.
2. Pulsar Enviar notificación demo.
3. Aceptar permiso si aparece.

Criterio:

- Se recibe notificación local.

## Checklist

- [OK] App móvil organizada por carpetas.
- [OK] Navegación Stack + Tabs funcionando.
- [OK] Login/register conectados al backend.
- [OK] JWT guardado y enviado en peticiones.
- [OK] Catálogo real desde API.
- [OK] Carrito real desde API.
- [OK] Checkout real con pedido `PAGADO`.
- [OK] Cámara funcional.
- [OK] GPS funcional.
- [OK] Notificación local funcional.
- [OK] UI coherente y responsive.
- [OK] README y documentación listos para GitHub.
