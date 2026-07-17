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

# 🔐 Credenciales de prueba

> Estas cuentas son únicamente para demostración académica. No reutilizar sus contraseñas en otros servicios.

## Clientes

```text
Correo: centeno2018coaraya@gmail.com
Contraseña: 73418626
```

```text
Correo: tcemmasv@gmail.com
Contraseña: 73418626
```

## Administrador

```text
Correo: admin@admin.com
Contraseña: 123456
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

* **Informe PDF:**
  https://utpedupe-my.sharepoint.com/:b:/g/personal/u22329385_utp_edu_pe/IQCc_rkXCMPiSbOGelAoHWEcAdREcekwFJoepq2OpIYI8Kc?e=GNLwcQ

* **Informe Word:**
  https://utpedupe-my.sharepoint.com/:w:/g/personal/u22329385_utp_edu_pe/IQCIigPowMa-TYmNC9IyiNUJAQ-6cubL381_XOwFe-tEoT8?e=9N80Be

* **Diapositivas:**
  https://canva.link/x7hubid7qltk94q

* **Prototipo Figma:**
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


