# Prueba Tecalis

Prueba tecnológica para Tecalis realizada por [Irene Muñoz Real](https://linkedin.com/in/irenemr/).

## Stack tecnológico

|                            | Nombre     | Versión  |
| ---                        | ---        | ---      |
| **Lenguaje**               | Node       | v14.21.3 |
| **Gestor de Dependencias** | Npm        | v6.14.18 |
| **Plantillas**             | Handlebars | v4.7.7   |
| **Build Tool**             | Webpack    | v5.76.3  |

## Instalación y configuración

### Prerrequisitos

Deberás tener al menos la version Node v14 instalada en tu local y NPM >= 6.0.0. Puedes comprobar tu versión con este comando:

```bash
node --version && npm --version
```

### Instalar dependencias

Para instalar todas las dependencias utiliza este comando:

```bash
npm install
```

### Generar Build

Para generar un build de producción, se está utilizando Webpack como compilador de assets, deberás de correr el siguiente comando:

```bash
npm run build
```

El contenido de este build aparecerá en la carpeta `/dist`.

## Formato de código
En este repositorio no tendremos test como tal, por lo que nuestros tests serán los linters, se están usando ESlint y StyleLint, por lo que es recomendable que los tengas instalados en tu editor de código para poder detectar problemas a la vez que escribes código.

Para correr los linters desde la consola puedes hacer con:

```bash
npm run lint
```

Esto correrá tanto ESlint como Stylelint. Si quieres correrlas por serparado, deberemos ejecutar:
```bash
npm run lint:css
```
o
```bash
npm run lint:js
```

Si al ejecutar el linter nos saltan advertencias, muchas veces podremos arreglarlas automáticamente ejecutando
```bash
npm run fix:css
```
o
```bash
npm run fix:js
```
cada uno en su caso.