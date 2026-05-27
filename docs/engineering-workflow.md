# ⚙️ Engineering Workflow — iESJ Mobile Store

## 📌 Objetivo

Este documento describe el flujo de ingeniería utilizado para preparar el proyecto para:

- Expo EAS Build
- Integración Continua (CI)
- Validación automática
- Deploy móvil
- Buenas prácticas de repositorio
- Preparación para producción

---

# 📁 Configuración del Repositorio

## `.gitignore`

El proyecto utiliza un `.gitignore` optimizado para Expo, React Native y EAS Build.

```gitignore
# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Build artifacts
*.apk
*.aab

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# Debug logs
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store

# Certificates
*.pem

# Local environment files
.env
.env.*
.env*.local

# TypeScript
*.tsbuildinfo

# Generated native folders
/ios
/android

# IDE
.vscode/
.idea/

# Expo generated
.expo-shared/
```

---

# ⚡ Metro Configuration

El proyecto utiliza la configuración oficial de Expo Metro.

## `metro.config.js`

```js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = config;
```

Esto garantiza compatibilidad correcta con Expo SDK y Expo Doctor.

---

# 📦 Scripts del Proyecto

## `package.json`

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",

  "doctor": "npx expo-doctor",

  "build:android": "eas build -p android --profile preview",

  "build:production": "eas build -p android --profile production"
}
```

---

# 📱 Configuración Expo

## `app.json`

```json
{
  "expo": {
    "name": "iESJ Mobile Store",
    "slug": "iesj-mobile-store",
    "version": "1.0.0",

    "orientation": "portrait",

    "userInterfaceStyle": "dark",

    "scheme": "iesjmobile",

    "icon": "./assets/logo.png",

    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#0B1120"
    },

    "assetBundlePatterns": ["**/*"],

    "android": {
      "package": "com.iesj.mobile.store",

      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.png",
        "backgroundColor": "#0B1120"
      },

      "edgeToEdgeEnabled": true
    },

    "web": {
      "bundler": "metro",
      "favicon": "./assets/logo.png"
    },

    "extra": {
      "eas": {
        "projectId": "fb7077f3-ef08-4471-b806-13317597bb15"
      }
    },

    "plugins": ["expo-font"]
  }
}
```

---

# 🚀 Expo EAS Build

El proyecto utiliza Expo Application Services (EAS) para builds cloud.

## Configuración

```bash
eas build:configure
```

## Build Android Preview

```bash
eas build -p android --profile preview
```

## Build Android Producción

```bash
eas build -p android --profile production
```

---

# 🔄 Integración Continua (CI/CD)

El proyecto incorpora GitHub Actions para automatizar validaciones.

## Workflow

Ubicación:

```txt
.github/workflows/expo-ci.yml
```

## Pipeline

```txt
Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Expo Doctor
   ↓
Expo Validation
   ↓
Build Verification
```

## Workflow YAML

```yaml
name: Expo CI Pipeline

on:
  push:
    branches:
      - main
      - cambios

  pull_request:
    branches:
      - main

jobs:
  build-and-check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run Expo Doctor
        run: npx expo-doctor

      - name: Verify Expo project
        run: npx expo export --platform web
```

---

# ✅ Validaciones Recomendadas

Antes de hacer push:

```bash
npm run doctor
```

Resultado esperado:

```txt
18/18 checks passed
```

---

# 🌿 Workflow Git

## Verificar cambios

```bash
git status
```

## Agregar archivos

```bash
git add .
```

## Commit profesional

```bash
git commit -m "chore(ci): configure Expo EAS build and CI pipeline"
```

## Push

```bash
git push origin cambios
```

---

# 📦 Resultado del Build

Expo EAS genera:

- APK Android
- Logs cloud build
- Dashboard EAS
- URL de descarga
- Evidencia de despliegue
- Evidencia CI/CD

---

# 🏗️ Resultado Técnico

El proyecto implementa:

- Arquitectura modular
- React Native + Expo
- Context API
- Hooks personalizados
- AsyncStorage
- Navegación Stack + Tabs
- Theming centralizado
- CI/CD básico
- Cloud builds con Expo EAS
- Componentización reutilizable
- UI/UX consistente
- Workflow Git profesional

---

# 📌 Estado del Proyecto

El proyecto se encuentra preparado para:

- Desarrollo escalable
- Builds cloud
- Deploy móvil
- Presentación académica
- Portafolio profesional
- Evolución futura
