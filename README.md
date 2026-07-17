# 📱 iESJ Mobile Store

![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020)
![React Native](https://img.shields.io/badge/React%20Native-Mobile-61DAFB)
![Android](https://img.shields.io/badge/Android-Development%20Build-3DDC84)
![PayPal](https://img.shields.io/badge/PayPal-Sandbox-003087)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-success)
![EAS](https://img.shields.io/badge/Expo-EAS%20Build-purple)

Aplicación móvil de comercio electrónico enfocada en hardware computacional y periféricos gaming, desarrollada con **Expo SDK 54** y **React Native**.

La aplicación consume una API REST implementada con Spring Boot, utiliza autenticación JWT, integra PayPal Sandbox mediante Orders API v2 y dispone de vistas diferenciadas para clientes y administradores.

---

# 📌 Características principales

## Cliente

* Registro e inicio de sesión.
* Autenticación mediante JWT.
* Catálogo de productos.
* Detalle de producto.
* Carrito persistente.
* Creación de pedidos.
* Pago mediante PayPal Sandbox.
* Retorno del navegador mediante deep link.
* Historial y detalle de pedidos.
* Perfil de usuario.
* Cámara, ubicación y notificaciones.

## Administrador

* Dashboard con indicadores.
* Productos activos y con stock bajo.
* Ventas pagadas acumuladas.
* Últimos pedidos.
* Gestión de productos.
* Creación, edición y desactivación.
* Registro y escaneo de códigos de barras.
* Gestión de pedidos.
* Filtros por estado.
* Transiciones controladas:

```text
PENDIENTE → CANCELADO
PAGADO → ENVIADO
ENVIADO → ENTREGADO
```

El estado `PAGADO` solo se asigna después de que PayPal confirma una captura `COMPLETED`.

---

# 🚀 Tecnologías utilizadas

* React Native.
* Expo SDK 54.
* Expo Development Build.
* React Navigation.
* Context API.
* Hooks personalizados.
* Axios.
* AsyncStorage.
* Expo Camera.
* Expo Location.
* Expo Notifications.
* Expo Web Browser.
* Expo Linking.
* Expo EAS Build.
* GitHub Actions.

---

# 🏗️ Arquitectura del proyecto

```text
src/
├── api/                 # Clientes HTTP, contratos y mappers
├── components/
│   ├── admin/           # Componentes administrativos
│   ├── common/          # Botones, campos, estados vacíos
│   └── layout/          # Contenedores de pantalla
├── constants/           # Colores, tema y constantes
├── context/             # Auth, carrito y pedidos
├── hooks/               # Hooks de cliente, PayPal y administración
├── navigation/          # Navegación por rol
├── screens/
│   ├── admin/
│   ├── auth/
│   ├── cart/
│   ├── orders/
│   ├── products/
│   └── profile/
├── services/            # Notificaciones y servicios nativos
├── styles/
└── utils/
```

## Navegación por rol

```text
Sin autenticación
└── AuthNavigator

Rol CLIENT
└── CustomerNavigator

Rol ADMIN
└── AdminNavigator
```

---

# ✅ Requisitos previos

## Requisitos generales

* Git.
* Node.js LTS.
* npm.
* Java 17 para compilar Android.
* Android Studio y Android SDK.
* Android Platform Tools (`adb`).
* Un dispositivo Android con depuración USB o un emulador.
* Cuenta Expo para EAS Build.
* Backend iESJ Mobile Store API en ejecución.

Verificar:

```bash
git --version
node --version
npm --version
java -version
adb version
```

---

# 💻 Preparación del entorno por sistema operativo

## Windows 10/11 — PowerShell

Instalar las herramientas principales:

```powershell
winget install Git.Git
winget install OpenJS.NodeJS.LTS
winget install EclipseAdoptium.Temurin.17.JDK
winget install Google.AndroidStudio
```

Cerrar y abrir PowerShell nuevamente. Después verificar:

```powershell
git --version
node --version
npm --version
java -version
adb version
```

Si `adb` no se reconoce, agregar al `PATH` la carpeta:

```text
C:\Users\TU_USUARIO\AppData\Local\Android\Sdk\platform-tools
```

Comprobar dispositivos:

```powershell
adb devices
```

---

## macOS

Instalar Homebrew si todavía no está disponible y luego ejecutar:

```bash
brew install git
brew install node
brew install openjdk@17
brew install android-platform-tools
brew install --cask android-studio
```

Configurar Java 17:

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 17)' >> ~/.zshrc
source ~/.zshrc
```

En equipos Intel, Homebrew puede utilizar `/usr/local` en lugar de `/opt/homebrew`.

Verificar:

```bash
git --version
node --version
npm --version
java -version
adb version
```

Para compilar iOS localmente también se necesita Xcode:

```bash
xcode-select --install
```

---

## Linux — Arch Linux

```bash
sudo pacman -Syu
sudo pacman -S --needed git nodejs npm jdk17-openjdk android-tools
```

Configurar Java 17:

```bash
sudo archlinux-java set java-17-openjdk
java -version
```

Android Studio puede instalarse mediante Flatpak:

```bash
flatpak install flathub com.google.AndroidStudio
```

Verificar:

```bash
git --version
node --version
npm --version
java -version
adb version
```

---

## Linux — Ubuntu/Debian

```bash
sudo apt update
sudo apt install -y git nodejs npm openjdk-17-jdk adb
```

Android Studio puede instalarse mediante Flatpak:

```bash
flatpak install flathub com.google.AndroidStudio
```

Verificar:

```bash
git --version
node --version
npm --version
java -version
adb version
```

---

# 📥 Clonar e instalar el proyecto

## Linux y macOS

```bash
git clone <URL_REPOSITORIO_MOBILE>
cd iesj-mobile-store
npm ci
```

## Windows — PowerShell

```powershell
git clone <URL_REPOSITORIO_MOBILE>
Set-Location iesj-mobile-store
npm ci
```

Si el repositorio no incluye `package-lock.json`, utilizar:

```bash
npm install
```

Verificar dependencias:

```bash
npx expo install --check
npx expo-doctor
```

El resultado esperado es:

```text
18/18 checks passed
```

---

# 🔐 Variables de entorno del cliente

Crear un archivo `.env` en la raíz del proyecto.

## Linux y macOS

```bash
cp .env.example .env
```

## Windows — PowerShell

```powershell
Copy-Item .env.example .env
```

## Contenido de `.env.example`

```env
# URL base del backend. Debe terminar en /api.
EXPO_PUBLIC_API_URL=http://127.0.0.1:8080/api
```

> `EXPO_PUBLIC_API_URL` no es un secreto. Expo inserta su valor dentro del bundle de la aplicación.

Nunca colocar en la aplicación móvil:

```text
PAYPAL_CLIENT_SECRET
DB_PASSWORD
JWT_SECRET
```

Esas credenciales pertenecen exclusivamente al backend.

---

# 👤 Primera puesta en marcha y creación de usuarios

La aplicación no debe depender de cuentas administrativas incorporadas directamente en el código fuente.

En una instalación nueva, el procedimiento recomendado es:

1. Configurar el archivo `.env` del backend.
2. Levantar PostgreSQL o conectar la instancia de Supabase.
3. Ejecutar las migraciones necesarias.
4. Cargar el catálogo mediante `data.sql`, si corresponde.
5. Levantar el backend.
6. Configurar `EXPO_PUBLIC_API_URL` en la aplicación móvil.
7. Iniciar la aplicación.
8. Registrar los usuarios desde la propia aplicación.
9. Promover una cuenta a `ADMIN` desde Supabase.
10. Cerrar sesión e iniciar nuevamente para renovar el JWT.

---

## Crear una cuenta de cliente

Desde la pantalla de registro se deben ingresar los siguientes datos:

* Nombre.
* Correo electrónico.
* Contraseña.

El backend creará la cuenta inicialmente con el rol:

```text
CLIENT
```

Este mismo flujo debe utilizarse para crear la cuenta que posteriormente será promovida a administradora.

---

## Habilitar acceso administrativo

Después de promover la cuenta desde Supabase:

1. Cerrar sesión en la aplicación.
2. Volver a iniciar sesión.
3. `AuthContext` recibirá un JWT nuevo.
4. `AppNavigator` detectará el rol `ADMIN`.
5. La aplicación mostrará `AdminNavigator`.

No es necesario recompilar la aplicación móvil para modificar el rol de un usuario.

El flujo esperado es:

```text
Registro desde la aplicación
        ↓
Usuario creado como CLIENT
        ↓
Actualización del rol en Supabase
        ↓
Cerrar sesión
        ↓
Volver a iniciar sesión
        ↓
JWT actualizado con rol ADMIN
        ↓
Acceso al módulo administrativo
```

---

## Restablecer una sesión antigua

Si el usuario conserva una sesión previa y sigue visualizando la interfaz de cliente:

1. Cerrar sesión desde el perfil.
2. Cerrar completamente la aplicación.
3. Abrir nuevamente la aplicación.
4. Iniciar sesión con la cuenta actualizada.

Durante el desarrollo también puede limpiarse `AsyncStorage` desinstalando la aplicación:

```bash
adb uninstall com.iesj.mobile.store
```

Después será necesario volver a instalar la development build.

No se recomienda realizar este procedimiento durante una demostración, salvo que la sesión se encuentre dañada o desactualizada.

---

# 🔐 Manejo de credenciales de prueba

La sección:

```markdown
# Credenciales de prueba
```

no debería contener contraseñas reales cuando el repositorio es público.

Se recomienda reemplazarla por:

## 🔐 Cuentas de demostración

Las cuentas de demostración deben crearse en la instancia utilizada para la evaluación.

Por seguridad, las contraseñas no se publican en el repositorio.

Los datos de acceso serán proporcionados de manera privada al docente o evaluador.

Puede utilizarse una tabla sin contraseñas:

| Tipo          | Correo referencial        | Rol      |
| ------------- | ------------------------- | -------- |
| Cliente       | `cliente.demo@local.test` | `CLIENT` |
| Administrador | `admin.demo@local.test`   | `ADMIN`  |

No se debe publicar:

* Correos personales.
* DNI utilizados como contraseña.
* Contraseñas reutilizadas.
* `PAYPAL_CLIENT_SECRET`.
* `JWT_SECRET`.
* Contraseñas de Supabase.
* Tokens JWT.
* Credenciales de cuentas PayPal Sandbox.

Para una demostración presencial, las credenciales pueden mantenerse en:

* Un documento privado.
* Un gestor de contraseñas.
* Una nota local no versionada.
* Variables de entorno.
* Un archivo ignorado por Git.

Ejemplo de archivo local:

```text
docs/demo-credentials.local.md
```

Agregarlo a `.gitignore`:

```gitignore
docs/demo-credentials.local.md
```

---

# 🔒 Consideraciones de seguridad


El proyecto implementa medidas de seguridad adecuadas para un MVP académico, incluyendo:

* Contraseñas procesadas mediante BCrypt.
* Autenticación mediante JWT.
* Rutas protegidas con Spring Security.
* Autorización basada en roles.
* Validación de propiedad de pedidos.
* Credenciales PayPal almacenadas únicamente en el backend.
* Variables sensibles externas al repositorio.
* Captura PayPal realizada desde el servidor.
* Validación del estado `COMPLETED`.
* Idempotencia en la creación y captura de órdenes.
* Separación entre cuentas cliente y administrador.

Sin embargo, antes de un despliegue comercial deben incorporarse controles adicionales.

---

## Secretos y variables de entorno

Nunca publicar:

```text
.env
DB_PASSWORD
JWT_SECRET
PAYPAL_CLIENT_SECRET
Credenciales personales
Tokens JWT
Contraseñas de cuentas demo
```

El repositorio solo debe incluir:

```text
.env.example
```

Con valores ficticios:

```env
DB_PASSWORD=CAMBIAR_PASSWORD
JWT_SECRET=CAMBIAR_SECRETO
PAYPAL_CLIENT_ID=CAMBIAR_CLIENT_ID
PAYPAL_CLIENT_SECRET=CAMBIAR_CLIENT_SECRET
```

Antes de realizar un commit, comprobar:

```bash
git status
git check-ignore .env
git diff --cached
```

Buscar accidentalmente secretos dentro del repositorio:

```bash
git grep -n "PAYPAL_CLIENT_SECRET"
git grep -n "DB_PASSWORD"
git grep -n "JWT_SECRET"
```

Los resultados deben apuntar únicamente a archivos de ejemplo o documentación que utilice placeholders.

---

## JWT

Para producción se recomienda:

* Generar una clave Base64 aleatoria.
* No reutilizar la clave de desarrollo.
* Rotar la clave si fue expuesta.
* Utilizar una expiración razonable.
* Implementar refresh tokens si el sistema evoluciona.
* Revocar sesiones comprometidas.
* No incluir información sensible dentro del payload.
* Evitar registrar tokens completos en los logs.

Generar una clave segura:

```bash
openssl rand -base64 64
```

Ejemplo de configuración:

```env
JWT_SECRET=VALOR_BASE64_GENERADO
JWT_EXPIRATION_MS=604800000
```

---

## PayPal

Durante el desarrollo se utiliza:

```env
PAYPAL_BASE_URL=https://api-m.sandbox.paypal.com
```

Para producción real se requiere:

```env
PAYPAL_BASE_URL=https://api-m.paypal.com
```

El cambio a PayPal Live solo debe realizarse después de:

* Crear una aplicación Live.
* Obtener credenciales Live.
* Validar el dominio y las políticas comerciales.
* Probar la conciliación de pagos.
* Implementar webhooks.
* Revisar el flujo de devoluciones y disputas.
* Aplicar monitoreo y auditoría.
* Separar credenciales Sandbox y Live.
* Verificar el cumplimiento legal y tributario.

Las credenciales Sandbox y Live deben mantenerse completamente separadas.

Nunca colocar en la aplicación móvil:

```text
PAYPAL_CLIENT_SECRET
```

El `Client Secret` debe permanecer únicamente en el backend.

---

## Base de datos

Para producción se recomienda:

* Utilizar conexiones cifradas.
* Mantener `sslmode=require`.
* Evitar utilizar el usuario propietario para todas las operaciones.
* Aplicar el principio de privilegios mínimos.
* Realizar copias de seguridad periódicas.
* Probar las migraciones antes de ejecutarlas.
* No utilizar `ddl-auto=update` sin control.
* Incorporar Flyway o Liquibase si el proyecto continúa.
* Mantener `SQL_INIT_MODE=never`.
* Evitar seeds automáticos en producción.
* No insertar administradores mediante scripts públicos.
* Restringir el acceso al panel de Supabase.

Configuración recomendada:

```env
SQL_INIT_MODE=never
SPRING_PROFILES_ACTIVE=prod
```

---

## CORS

El valor:

```env
CORS_ALLOWED_ORIGINS=*
```

es aceptable únicamente para pruebas controladas del cliente móvil.

Cuando exista un cliente web o un backend público, se recomienda restringirlo:

```env
CORS_ALLOWED_ORIGINS=https://app.ejemplo.com,https://admin.ejemplo.com
```

CORS no reemplaza:

* La autenticación JWT.
* La autorización por roles.
* La validación de permisos.
* La protección de endpoints.
* La verificación de propiedad de recursos.

---

## Dispositivos y ADB

`adb reverse` crea una redirección local entre el teléfono y la computadora.

Debe utilizarse únicamente:

* En dispositivos de confianza.
* Durante el desarrollo.
* En conexiones USB controladas.
* Con la depuración USB habilitada solo mientras sea necesaria.

Al finalizar:

```bash
adb reverse --remove-all
```

También se recomienda:

1. Desconectar el cable USB.
2. Desactivar la depuración USB.
3. Revocar autorizaciones antiguas si el dispositivo fue conectado a un equipo ajeno.
4. No dejar sesiones administrativas abiertas.

---

## Registros y logs

No se debe imprimir en los logs:

```text
Contraseñas
JWT completos
Client Secret
Access tokens de PayPal
Datos bancarios
Credenciales de Supabase
Información personal sensible
```

En producción deben utilizarse:

* Logs estructurados.
* Niveles `INFO`, `WARN` y `ERROR`.
* Identificadores de correlación.
* Auditoría de acciones administrativas.
* Enmascaramiento de datos sensibles.
* Rotación y retención controlada de logs.
* Alertas ante errores de autenticación o pagos.
* Monitoreo de intentos repetidos de acceso.

Ejemplo de información que sí puede registrarse:

```text
ID del pedido
Estado del pedido
Código HTTP
Fecha y hora
ID de correlación
Resultado general de la operación
```

Ejemplo de información que no debe registrarse:

```text
Bearer eyJhbGciOi...
PAYPAL_CLIENT_SECRET=...
DB_PASSWORD=...
Contraseña ingresada por el usuario
```
---

# 🌐 Valores de `EXPO_PUBLIC_API_URL`

## Dispositivo Android físico mediante USB y ADB Reverse

```env
EXPO_PUBLIC_API_URL=http://127.0.0.1:8080/api
```

## Emulador Android

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:8080/api
```

## Simulador iOS

```env
EXPO_PUBLIC_API_URL=http://localhost:8080/api
```

## Dispositivo físico en la misma red LAN

```env
EXPO_PUBLIC_API_URL=http://IP_LOCAL_DE_LA_PC:8080/api
```

Ejemplo:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.50:8080/api
```

## Build Preview o Production

```env
EXPO_PUBLIC_API_URL=https://api.tu-dominio.com/api
```

Después de cambiar la URL, realizar una recarga completa:

```bash
npx expo start --dev-client --clear
```

---

# 📡 Obtener la IP local

## Windows

```powershell
ipconfig
```

Buscar `Dirección IPv4` en el adaptador Wi-Fi o Ethernet.

## macOS

```bash
ipconfig getifaddr en0
```

Si se utiliza Ethernet:

```bash
ipconfig getifaddr en1
```

## Linux

```bash
hostname -I
```

O:

```bash
ip -4 addr
```

El celular y la computadora deben estar en la misma LAN. Como alternativa, puede compartirse Internet desde el celular hacia la computadora o desde la computadora hacia el celular.

---

# ▶️ Ejecución local en Android mediante USB

Esta es la modalidad recomendada para la demostración porque evita bloqueos o aislamiento de la red Wi-Fi.

## 1. Activar depuración USB

En Android:

```text
Ajustes
→ Acerca del teléfono
→ Pulsar varias veces “Número de compilación”
→ Opciones de desarrollador
→ Depuración USB
```

## 2. Conectar y comprobar el dispositivo

```bash
adb devices
```

Resultado esperado:

```text
List of devices attached
SERIAL_DEL_DISPOSITIVO    device
```

Si aparece `unauthorized`, desbloquear el teléfono y aceptar la autorización.

## 3. Crear los túneles USB

```bash
adb reverse tcp:8080 tcp:8080
adb reverse tcp:8081 tcp:8081
```

Comprobar:

```bash
adb reverse --list
```

Resultado esperado:

```text
UsbFfs tcp:8080 tcp:8080
UsbFfs tcp:8081 tcp:8081
```

* Puerto `8080`: backend Spring Boot.
* Puerto `8081`: Metro Bundler.

## 4. Primera compilación e instalación

El backend debe estar encendido.

```bash
npx expo prebuild --platform android
npx expo run:android
```

También puede seleccionarse un dispositivo:

```bash
npx expo run:android --device
```

En el selector, elegir el teléfono y presionar Enter.

## 5. Ejecuciones posteriores

Después de instalar la development build, no se recompila Android para cambios normales en JavaScript:

```bash
adb reverse tcp:8080 tcp:8080
adb reverse tcp:8081 tcp:8081
npx expo start --dev-client --localhost --clear
```

Cuando Metro muestre el menú, presionar:

```text
a
```

También puede abrirse manualmente **iESJ Mobile Store** desde el teléfono.

---

# 📶 Ejecución por Wi-Fi o LAN

Configurar `.env`:

```env
EXPO_PUBLIC_API_URL=http://IP_LOCAL_DE_LA_PC:8080/api
```

Iniciar Metro:

```bash
npx expo start --dev-client --lan --clear
```

Requisitos:

* Backend iniciado.
* Teléfono y computadora en la misma red.
* Puerto `8080` accesible.
* Puerto `8081` accesible.
* La red no debe aplicar aislamiento entre clientes.

## Abrir el puerto del backend en Windows

Ejecutar PowerShell como administrador:

```powershell
New-NetFirewallRule `
  -DisplayName "iESJ Backend 8080" `
  -Direction Inbound `
  -Protocol TCP `
  -LocalPort 8080 `
  -Action Allow
```

## Abrir el puerto en Linux con firewalld

```bash
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --reload
```

## Abrir el puerto en Ubuntu con UFW

```bash
sudo ufw allow 8080/tcp
```

Probar desde el navegador del teléfono:

```text
http://IP_LOCAL_DE_LA_PC:8080/api/health
```

---

# 🤖 Emulador Android

Configurar:

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:8080/api
```

Iniciar el emulador desde Android Studio y ejecutar:

```bash
npx expo run:android
```

Después de la primera compilación:

```bash
npx expo start --dev-client
```

Presionar `a`.

---

# 🍎 iOS

La compilación local de iOS solo está disponible en macOS con Xcode.

Primera compilación:

```bash
npx expo prebuild --platform ios
npx expo run:ios
```

Ejecuciones posteriores:

```bash
npx expo start --dev-client
```

Presionar `i`.

Para dispositivos físicos, la API debe usar una URL accesible desde el dispositivo:

```env
EXPO_PUBLIC_API_URL=http://IP_LOCAL_DE_LA_MAC:8080/api
```

---

# 🔗 Deep link de PayPal

El esquema de la aplicación está definido en `app.json`:

```json
{
  "expo": {
    "scheme": "iesjmobile"
  }
}
```

URLs utilizadas:

```text
iesjmobile://paypal/success
iesjmobile://paypal/cancel
```

Probar manualmente en Android:

```bash
adb shell am start \
  -a android.intent.action.VIEW \
  -d "iesjmobile://paypal/success?token=PRUEBA123"
```

La aplicación debe abrirse o volver al primer plano.

El flujo funciona así:

```text
App móvil
→ Backend crea orden PayPal
→ Navegador de PayPal
→ Usuario aprueba
→ iesjmobile://paypal/success
→ App solicita captura al backend
→ Pedido PAGADO
```

No se utiliza `PAYPAL_PUBLIC_BASE_URL` en el cliente móvil.

---

# 💳 Requisitos de PayPal Sandbox

El cliente móvil no contiene credenciales PayPal.

El backend debe tener configurados:

```text
PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET
PAYPAL_BASE_URL
```

Para probar:

1. Abrir el checkout.
2. Crear un pedido.
3. Pulsar **Pagar con PayPal**.
4. Iniciar sesión con una cuenta compradora Sandbox.
5. Aprobar la operación.
6. Verificar el retorno a la aplicación.
7. Confirmar que el pedido cambió a `PAGADO`.

---

# 🧪 Scripts disponibles

```bash
npm start
npm run android
npm run ios
npm run web
npm run doctor
npm run build:android
npm run build:production
```

Comandos equivalentes:

```bash
npx expo start
npx expo run:android
npx expo run:ios
npx expo start --web
npx expo-doctor
```

---

# ☁️ Expo EAS Build

## 1. Instalar EAS CLI

```bash
npm install --global eas-cli
```

Verificar:

```bash
eas --version
```

## 2. Iniciar sesión

```bash
eas login
eas whoami
```

## 3. Configurar el proyecto

```bash
eas build:configure -p all
```

## 4. Configurar `eas.json`

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "environment": "development"
    },
    "preview": {
      "distribution": "internal",
      "environment": "preview",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "environment": "production",
      "autoIncrement": true
    }
  }
}
```

## 5. Registrar variables EAS

### Desarrollo

```bash
eas env:create \
  --name EXPO_PUBLIC_API_URL \
  --value http://127.0.0.1:8080/api \
  --environment development \
  --visibility plaintext
```

### Preview

```bash
eas env:create \
  --name EXPO_PUBLIC_API_URL \
  --value https://API_PREVIEW/api \
  --environment preview \
  --visibility plaintext
```

### Producción

```bash
eas env:create \
  --name EXPO_PUBLIC_API_URL \
  --value https://API_PRODUCCION/api \
  --environment production \
  --visibility plaintext
```

Listar variables:

```bash
eas env:list --environment development
eas env:list --environment preview
eas env:list --environment production
```

Actualizar una variable:

```bash
eas env:update \
  --name EXPO_PUBLIC_API_URL \
  --value https://NUEVA_API/api \
  --environment production \
  --visibility plaintext
```

Descargar variables:

```bash
eas env:pull --environment development
```

---

# 📦 Builds Android

## Development Build

```bash
eas build -p android --profile development
```

## APK Preview

```bash
eas build -p android --profile preview
```

## AAB de producción

```bash
eas build -p android --profile production
```

## Consultar builds

```bash
eas build:list -p android
```

## Instalar un APK local

```bash
adb install -r ruta/al/archivo.apk
```

Si existe una versión firmada con otra clave:

```bash
adb uninstall com.iesj.mobile.store
adb install ruta/al/archivo.apk
```

---

# 📦 Builds iOS

## Development

```bash
eas build -p ios --profile development
```

## Preview

```bash
eas build -p ios --profile preview
```

## Producción

```bash
eas build -p ios --profile production
```

Para distribuir mediante App Store se necesita una cuenta Apple Developer.

---

# 🚢 Publicación en tiendas

## Google Play

```bash
eas submit -p android --profile production --latest
```

## Apple App Store

```bash
eas submit -p ios --profile production --latest
```

Antes de publicar:

* Cambiar `EXPO_PUBLIC_API_URL` por la API HTTPS de producción.
* Validar el package Android.
* Validar el bundle identifier iOS.
* Usar iconos y splash finales.
* Revisar permisos.
* Revisar política de privacidad.
* Desactivar credenciales de demostración.

---

# 🌍 Exportación web opcional

```bash
npx expo export --platform web
```

Los archivos se generan en:

```text
dist/
```

La URL de API debe ser pública:

```env
EXPO_PUBLIC_API_URL=https://API_PRODUCCION/api
```

El directorio `dist/` puede desplegarse en un hosting estático.

---

# 🎬 Comandos para la demostración en vivo

## Terminal 1 — Backend

```bash
cd "/ruta/al/backend"
./mvnw spring-boot:run
```

## Terminal 2 — Verificación y ADB

```bash
curl http://127.0.0.1:8080/api/health && \
echo && \
adb devices && \
adb reverse tcp:8080 tcp:8080 && \
adb reverse tcp:8081 tcp:8081 && \
adb reverse --list
```

Con un serial específico:

```bash
adb -s SERIAL_DISPOSITIVO reverse tcp:8080 tcp:8080
adb -s SERIAL_DISPOSITIVO reverse tcp:8081 tcp:8081
```

## Terminal 3 — Aplicación móvil

```bash
cd "/ruta/a/iesj-mobile-store"
npx expo start --dev-client --localhost --clear
```

Después presionar:

```text
a
```

Durante la demostración no ejecutar:

```bash
npx expo prebuild
npx expo run:android
npm install
rm -rf node_modules
```

La development build debe estar instalada previamente.

---

# 🧯 Solución de problemas

## `Network Error`

```bash
curl http://127.0.0.1:8080/api/health
adb reverse --list
```

Restaurar túneles:

```bash
adb reverse tcp:8080 tcp:8080
adb reverse tcp:8081 tcp:8081
```

## Dispositivo no detectado

```bash
adb kill-server
adb start-server
adb devices
```

## Dispositivo `unauthorized`

* Desbloquear el teléfono.
* Aceptar la depuración USB.
* Revocar y volver a autorizar depuración si es necesario.

## Firma incompatible

```text
INSTALL_FAILED_UPDATE_INCOMPATIBLE
```

Solución:

```bash
adb uninstall com.iesj.mobile.store
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## Dependencias Expo desalineadas

```bash
npx expo install --check
npx expo install --fix
npx expo-doctor
```

## Limpiar caché de Metro

```bash
npx expo start --dev-client --clear
```
---

# 🔄 CI/CD

El proyecto incorpora GitHub Actions para:

```text
Push / Pull Request
        ↓
npm ci
        ↓
Expo Doctor
        ↓
Validación de dependencias
        ↓
Comprobación del proyecto
```

Comprobaciones locales equivalentes:

```bash
npm ci
npx expo install --check
npx expo-doctor
```

---

# 📚 Documentación

```text
docs/engineering-workflow.md
```

---

# 👨‍💻 Autores

* Percy Alonzo Chabria Loayza — U20217294.
* Emmanuel Misael Torres Centeno — U22329385.

📍 Lima, Perú — 2026.

---

# 🎓 Información académica

* Curso: Desarrollo de Aplicaciones Móviles.
* Proyecto: iESJ Mobile Store.
* Modalidad: Proyecto Final.

---

# 🔗 Enlaces del proyecto

* **Repositorio Mobile:**
  https://github.com/Emma3TC-main/iesj-mobile-store.git

* **Repositorio Backend:**
  https://github.com/Emma3TC-main/iesj-mobile-store-backend.git

* **Build de la aplicación — Expo EAS:**
  https://expo.dev/accounts/emma3tc/projects/iesj-mobile-store/builds/ff6badb2-08c3-486e-b844-07e7de0eeac9

* **Diapositivas:**
  https://canva.link/d52h0nq1uq17vho

* **Informe final en PDF:**
  https://utpedupe-my.sharepoint.com/:b:/g/personal/u22329385_utp_edu_pe/IQBrS7Sp3z_OQbZtK-Qp_DzvAaptb-eCeS4452c6s0qOUW4?e=61iqDs

* **Prototipo en Figma:**
  https://www.figma.com/design/JmgiW06u12Y6goMtHF2vDT/iESJ-Webstore?node-id=0-1&t=g4cU7Q0G7vm1JDCp-1

---

# ✅ Estado del proyecto

* Arquitectura modular.
* UI/UX cyber-tech.
* Navegación por roles.
* Autenticación JWT.
* Integración PayPal Sandbox.
* Deep link móvil.
* Carrito y pedidos.
* Reservas de stock.
* Dashboard administrativo.
* Gestión de productos.
* Gestión de pedidos.
* Cámara y escáner.
* GPS.
* Notificaciones.
* Expo EAS Build.
* GitHub Actions.
* Development build Android probada en dispositivo físico.

# ⚠️ Descargo de responsabilidad

**iESJ Mobile Store** es un proyecto académico desarrollado con fines educativos y de demostración técnica.

La integración de PayPal utiliza el entorno **Sandbox**. No procesa dinero real y no debe considerarse una solución comercial lista para producción.

Los productos, precios, usuarios, pedidos, inventario y transacciones utilizados durante las pruebas pueden ser datos ficticios o de demostración.

Los autores no se responsabilizan por:

* El uso del proyecto con credenciales reales sin aplicar medidas de seguridad adicionales.
* La exposición de secretos causada por una configuración incorrecta.
* La ejecución de scripts SQL sobre bases de datos que no cuenten con copias de seguridad.
* El uso del sistema para procesar pagos reales sin validaciones legales, comerciales y técnicas.
* La pérdida de datos causada por seeds, migraciones o procesos de inicialización ejecutados sin revisión previa.
* Despliegues que mantengan contraseñas, tokens o claves de ejemplo.
* El uso de dependencias, integraciones o configuraciones fuera del alcance académico del proyecto.

Antes de utilizar el sistema en un entorno real, se deben implementar como mínimo las siguientes medidas:

* Uso obligatorio de HTTPS.
* Gestión profesional y centralizada de secretos.
* Rotación periódica de claves y credenciales.
* Implementación de webhooks de PayPal.
* Auditoría de operaciones y acciones administrativas.
* Protección contra abuso y aplicación de rate limiting.
* Monitoreo de disponibilidad, errores y transacciones.
* Copias de seguridad automáticas.
* Migraciones de base de datos versionadas.
* Políticas de privacidad.
* Términos y condiciones de uso.
* Gestión de devoluciones y reembolsos.
* Cumplimiento legal, comercial y tributario aplicable.

Las credenciales de ejemplo deben cambiarse inmediatamente en cualquier instalación nueva.

---
