# ⚛️ Readx – React Developer Experience & Best Practices Starter

**Readx** es una base de proyecto para React + TypeScript enfocada en ofrecer una **excelente experiencia de desarrollo (DX)** y **promover buenas prácticas** desde el primer commit.

Su objetivo no es ser un framework nuevo, sino una **plantilla profesional y escalable**, que sirva como punto de partida para proyectos reales, aprendizaje o desarrollo freelance.  
Está diseñada para ayudar a escribir código más limpio, modular, y fácil de mantener a medida que la aplicación crece.

---

## 🚀 Principios

✅ **Mejorar la DX (Developer Experience)** — configuración lista, imports con alias, estructura clara.  
✅ **Promover buenas prácticas** — separación por features, servicios centralizados, componentes reutilizables.  
✅ **Facilitar la escalabilidad** — arquitectura modular y extensible.  
✅ **Enseñar por ejemplo** — cada módulo muestra cómo integrar librerías comunes de manera coherente.  

---

## 🧱 Buenas prácticas incluidas

- 📁 Estructura por *features*, no por tipo de archivo.  
- 💡 Servicios centralizados y reutilizables.  
- 🔄 Query Client preconfigurado para data fetching.  
- 🎨 UI limpia y consistente con Tailwind.  
- ⚙️ Alias `@` configurado para imports absolutos.  

---

## 🧱 Arquitectura basada en Features

ReaDx usa una **arquitectura por features**, donde cada módulo es autocontenido y tiene:

- Sus **componentes**  
- Sus **páginas** (views o containers)  
- Sus **servicios** (acceso a API o lógica de negocio)  
- Sus **stores** y tipos  

Esto permite que las features se desarrollen, prueben y mantengan de forma independiente.

---

## 🚀 Stack Tecnológico

| Tecnología | Propósito | Enlace |
|-------------|------------|---------|
| ⚛️ **React 18+** | Librería base de UI | [react.dev](https://react.dev/) |
| ⚡ **Vite** | Entorno de desarrollo rápido | [vitejs.dev](https://vitejs.dev/) |
| 🌀 **TypeScript** | Tipado estático | [typescriptlang.org](https://www.typescriptlang.org/) |
| 🌐 **React Router v6+** | Sistema de rutas | [reactrouter.com](https://reactrouter.com/en/main) |
| 🔁 **TanStack Query** | Manejo de fetch y cache de datos | [tanstack.com/query](https://tanstack.com/query/latest) |
| 💾 **Zustand** | Estado global simple | [zustand-demo.pmnd.rs](https://zustand-demo.pmnd.rs/) |
| 🎨 **Tailwind CSS** | Estilos rápidos | [tailwindcss.com](https://tailwindcss.com/) |

## 🚀 Ejecución del Proyecto

ReaDx incluye un **servidor mock local** con [`json-server`](https://github.com/typicode/json-server) para simular una API REST, ideal para desarrollo o pruebas locales.

---

### 🧩 1. Instalar dependencias

```bash
npm install
```

---

### 🌐 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_API_URL=http://localhost:3000/
```

---

### 🧱 3. Ejecutar el servidor mock (API local)

Levanta la API simulada con:

```bash
npm run mock
```

Esto usa `json-server` y sirve los datos del archivo `mock.json` en el puerto **3000**.

📡 Endpoints disponibles por defecto:

```
GET    http://localhost:3000/users
POST   http://localhost:3000/users
DELETE http://localhost:3000/users/:id
```

Puedes editar `mock.json` para modificar o agregar endpoints según tus necesidades.

---

### ⚡ 4. Ejecutar la aplicación React

En otra terminal, inicia la aplicación con:

```bash
npm run dev
```

Esto levanta el entorno de desarrollo de Vite en:

👉 [http://localhost:5173](http://localhost:5173)

La aplicación ya está configurada para consumir los datos del mock API usando **Axios** y **TanStack Query**.

---

### 🧠 5. Flujo de ejecución

1. **`npm run mock`** → Levanta el servidor local que sirve los datos desde `mock.json`.  
2. **`npm run dev`** → Ejecuta la SPA de React.  
3. **`example.service.ts`** → Se encarga de obtener los datos con Axios.  
4. **TanStack Query** → Maneja el fetching, cache y estado de carga.  
5. **Zustand** → Almacena estado global (por ejemplo, usuario seleccionado).  

---

### ⚙️ 6. Simular latencia

Si deseas que las peticiones se vean más realistas, el servicio incluye un pequeño *delay* configurado:

```ts
await delay(300);
```

Solo ajusta el valor (en milisegundos) según tu necesidad.

---

### 💡 Problemas comunes

| Problema | Solución |
|-----------|-----------|
| **El puerto 3000 está ocupado** | Cambia el puerto en el script del mock: `"mock": "json-server --watch mock.json --port 4000 --routes routes.json"` |
| **Error CORS o red 404** | Verifica que `VITE_API_URL` en `.env` coincida con el puerto del mock |
| **json-server no se encuentra** | Ejecuta `npm install -D json-server` |
| **Datos no aparecen en la app** | Asegúrate de tener el mock corriendo **antes** de `npm run dev` |

---

## 🧱 Buenas prácticas incluidas

- 📁 Estructura por *features*, no por tipo de archivo.  
- 💡 Servicios centralizados y reutilizables.  
- 🔄 Query Client preconfigurado para data fetching.  
- 🎨 UI limpia y consistente con Tailwind.  
- ⚙️ Alias `@` configurado para imports absolutos.  

---

## 📜 Licencia

Este proyecto se distribuye bajo licencia **MIT**.  
Crea, mejora y comparte tu propia experiencia de desarrollo 🚀
