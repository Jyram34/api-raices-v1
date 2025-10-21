<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# API Raices - Plataforma de Turismo Comunitario

**API RESTful para la aplicación móvil Raices - Gestión de rutas, gastronomia y servicios turísticos en Pueblos Mágicos**

## 📋 Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints](#endpoints)
- [Variables de Entorno](#variables-de-entorno)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Desarrollo](#desarrollo)
- [Roadmap](#roadmap)

## Description

Raíces es una plataforma tecnológica que busca democratizar en los turismo en los Pueblos Mágicos de México, conectando directamente a viajeros con prestadores de servicios locales (guías, cocineras tradicionales, artesanos, hospedajes) para promover un turismo sostenible, cultural y comunitario.

**Problema que resuelve:** Los pequeños prestadores de servicios carecen de visibilidad digital, limitando su participación en los beneficios del turismo y contribuyendo a la pérdida de patrimonio cultural intangible.

## Características

### Fase 1 - MVP
- **Gestión de prestadores locales** - Registro y perfil de servicios
- **Catálogo de experiencias** - Rutas, gastronomía, hospedajes
- **Sistema de usuarios** - Viajeros y anfitriones
- **Búsqueda y filtros** - Exploración de servicios por categoría
- **Sistema de favoritos** - Guardado de servicios interesantes

### Fases Futuras
- Sistema de reservas y pagos integrados
- Itinerarios personalizados
- Reseñas y valoraciones
- Agenda de eventos culturales
- Marketplace de productos locales

## Tecnologías

-**Framework:** NestJS 10+
-**Base de Datos:** PostgreSQL + Prisma
-**Autenticacion:** JWT + Passport
-**Geolocalización:** Google Maps API
-**Archivos:** Cloudinary/Multer
-**Documentación:** Swagger/OpenAPI
-**Testing:** Jest + Supertest
-**Deploy:** Docker + AWS/Azure



## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/raices-turismo/api-raices.git
cd api-raices

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
npm run start:dev

# Ejecutar tests
npm run test
```

## 📁 Estructura del Proyecto

```
src/
├── interfaces/              # Gestión de usuarios (viajeros/anfitriones)
├── middlewares/               # Prestadores de servicios locales
├── modules/                 # Servicios turísticos (experiencias, rutas)
├── services/              # Categorías de servicios
├── utils/               # Gestión de Pueblos Mágicos y ubicaciones
├── common/                  # Utilidades compartidas
│   ├── decorators/          # Decoradores personalizados
│   ├── guards/              # Guards de autenticación
│   ├── interfaces/          # Interfaces TypeScript
│   └── pipes/               # Pipes de validación
└── config/                  # Configuraciones
```

## Endpoints Principales

### Autenticación

```
POST /auth/register            # Registro de usuarios
POST /auth/login               # Login
POST /auth/refresh             # Refresh token
```

### Prestadores de Servicios
```
GET  /providers                # Listar prestadores
POST /providers                # Crear perfil del prestador
GET  /providers/:id            # Obtener prestador especifico
PUT  /providers/:id            # Actualizar perfil
GET  /providers/:id/services   #Servicios de un prestador
```

### Prestadores de Servicios
```
GET  /services                 # Listar prestadores
GET  /services/search          # Crear perfil del prestador
POST /services                 # Crear servicio (prestadores)
PUT  /providers/:id            # Actualizar perfil
GET  /providers/:id/services   #Servicios de un prestador
```
## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Emilio Jyram R.G](https://github.com/Jyram34)
- Website - [https://nestjs.com](https://nestjs.com/)
- Github - [@Jyram34](https://github.com/Jyram34)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# api-raices-v1
