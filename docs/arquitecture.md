# 🏗️ Arquitectura Base de la Aplicación

Esta aplicación seguirá una arquitectura desacoplada y escalable basada en capas.

El objetivo principal es separar responsabilidades para mantener:

- Código limpio
- Escalabilidad
- Reutilización
- Mantenibilidad
- Facilidad de migración a backend real

---

# 📌 Arquitectura General

La arquitectura se divide en 4 capas principales:

- **Screen**
- **Hook**
- **API Service**
- **Mock Data / AsyncStorage**

---

# 🔄 Flujo de la Aplicación

```text
Screen
   ↓
Hook
   ↓
API Service
   ↓
Mock Data / AsyncStorage
```
