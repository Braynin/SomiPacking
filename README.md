# SomiPacking

Sitio web de SomiPacking, construido con [Astro](https://astro.build/), Tailwind CSS y desplegado en Vercel.

## Requisitos

- Node.js `22.x`.
- npm.

La versión de Node requerida está definida en `.nvmrc` y `package.json`.

```bash
node --version
```

El comando debe mostrar una versión `v22.x` antes de instalar o ejecutar el proyecto.

## Instalación

Clona el repositorio y entra al directorio del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd SomiPacking
```

Instala las versiones exactas definidas en `package-lock.json`:

```bash
npm ci
```

> No se debe versionar la carpeta `node_modules`. Cada desarrollador la genera localmente con `npm ci`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera y valida el build de producción. |
| `npm run preview` | Sirve localmente el build de producción. |

## Flujo de trabajo

- `main` es la rama de producción.
- Crea ramas desde `main` con los prefijos `feat/`, `fix/`, `chore/`, `docs/` o `ci/`.
- Abre un Pull Request hacia `main` para cada cambio.
- GitHub Actions ejecuta `npm ci` y `npm run build` en los Pull Requests.
- Vercel crea previews para las ramas de trabajo y despliega a producción desde `main`.

## Estructura del proyecto

```text
src/
  assets/       Datos y configuraciones de contenido
  components/   Componentes reutilizables de Astro
  layouts/      Layouts compartidos
  pages/        Rutas del sitio
  styles/       Estilos globales
public/         Imágenes, videos y recursos estáticos
```

## Despliegue

El proyecto se despliega automáticamente en Vercel desde la rama `main`.

Antes de mergear un cambio, verifica que el workflow de CI finalice correctamente y revisa el Preview Deployment de Vercel cuando el cambio pueda afectar la interfaz o el comportamiento del sitio.
