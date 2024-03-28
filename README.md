# Portafolio personal

## Tecnologías

- Next.js
- ReactJs

## Correr el proyecto

Para correr de manera local se pueden utilizar las api's de technologies y projects ubicadas en pages/api.

const request = await fetch(`${process.env.URL_API}/api/technologies`);
const request = await fetch(`${process.env.URL_API}/api/projects`);

Versión de Node requerida 16

### Ejecutar el proyecto en local

```bash
npm run dev
# or
yarn dev
```

### Generar sitio estatico

```bash
npm run build-static
# or
yarn run build-static
```
