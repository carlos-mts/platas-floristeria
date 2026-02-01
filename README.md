# 🌸 Platas Floristería

Platas Floristería es una aplicación web para la gestión y venta de flores, diseñada para adaptarse a un mercado **altamente volátil**, permitiendo manejar precios base, ajustes dinámicos y crecimiento progresivo del sistema.

---

## 🧠 Filosofía del proyecto

La aplicación está construida siguiendo principios de **arquitectura desacoplada y orientada por features**, inspirada en Clean Architecture, pero aplicada de forma **pragmática para frontend**.

Los objetivos principales son:

- Bajo acoplamiento
- Alta mantenibilidad
- Escalabilidad a largo plazo
- Facilidad para cambiar librerías (estado global, router, etc.)
- Código claro y organizado

> ⚠️ El proyecto **NO utiliza TypeScript** por decisión consciente.

---

## 🧱 Stack tecnológico

- **React 18**
- **react-router v7**
- **Zustand** (estado global)
- **JavaScript (ES6+)**
- **Tailwind CSS / CSS** (según configuración)

---

## 🗂️ Estructura de carpetas

```txt
src/
 ├─ app/
 │   ├─ router/
 │   │   └─ index.js
 │   ├─ layout/
 │   │   ├─ MainLayout.jsx
 │   │   ├─ Navbar.jsx
 │   │   └─ Footer.jsx
 │   └─ providers/
 │
 ├─ features/
 │   └─ products/
 │       ├─ pages/
 │       │   ├─ ProductListPage.jsx     # /products
 │       │   ├─ ProductDetailPage.jsx   # /products/:id
 │       │   └─ ProductEditPage.jsx     # /products/:id/edit
 │       │
 │       ├─ components/
 │       │   ├─ ProductList.jsx
 │       │   ├─ ProductCard.jsx
 │       │   └─ ProductForm.jsx
 │       │
 │       ├─ store/
 │       │   └─ productStore.js
 │       │
 │       ├─ services/
 │       │   └─ productService.js
 │       │
 │       └─ utils/
 │           └─ priceCalculator.js
 │
 ├─ shared/
 │   ├─ components/
 │   │   ├─ Button.jsx
 │   │   ├─ Input.jsx
 │   │   ├─ Modal.jsx
 │   │   └─ Card.jsx
 │   │
 │   ├─ hooks/
 │   │   └─ useToggle.js
 │   │
 │   └─ utils/
 │       ├─ formatCurrency.js
 │       └─ formatDate.js
 │
 ├─ assets/
 │   └─ images/
 │
 ├─ main.jsx
 │
 └─ index.css
# platas-floristeria
