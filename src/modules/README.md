# Arquitectura de Módulos

Este proyecto utiliza **Arquitectura Monolítica Modular con enfoque en Arquitectura Hexagonal**, diseñada para mantener **desacoplamiento, escalabilidad y facilidad de mantenimiento**.

## Estructura general

Cada módulo representa un **contexto de negocio independiente** (por ejemplo: `users`, `itinerary`, `booking`).
Cada módulo sigue la siguiente organización interna:

module/
├─ domain/           # Entidades y reglas de negocio puras
├─ application/      # Casos de uso y puertos (interfaces)
├─ infrastructure/   # Implementaciones concretas (DB, adaptadores)
└─ presentation/     # Controladores, DTOs y validaciones

---

## Principios clave

1. **Desacoplamiento total**
    - La lógica de negocio (`domain`) no depende de frameworks ni bases de datos.
    - Las implementaciones concretas (`infraestructure`) cumplen contratos definidos en la capa de aplicación (``ports`).

2. **Módulos independientes**
    - Cada módulo puede evolucionar sin afectar al resto del sistema.
    - Facilita el testing unitario y la escalabilidad futura.

3. **Comunicación entre módulos**
    - Los módulos intereactuán **solo mediante servicio expuestos o interfaces públicas**, evitando dependencias directas de infraestructura.
    - Por ejemplo, `booking` puede consultar información del módulo `users` sin acceder directamente a su repositorio o base de datos.

4. **Reutilización y consistencia**
    - Se definen contratos e interfaces que garantizan que todos los módulos sigan el mismo patrón.
    - Esto permite que el desarrollo de nuevos módulos sea rápido y consistente.

---

## Flujo de ejecución típico

1. Un **controlador** recibe una petición desde la API.
2. El **Caso de uso** correspondiente en la capa de aplicación ejecuta la lógica de negocio usando **puertos**.
3. Los **adaptadores de infraestructura** implementan esos puertos, comunicándose con la base de datos u otros servicios.
4. El resultado retorna al controlador y finalmente al cliente.

> Este flujo asegura que la lógica de negocio permanezca independiente de la tecnología utilizada.

---

## Beneficios de esta arquitectura

- Modularidad: fácil agregar o modificar módulos sin romper el sistema.
- Escalabilidad: cada módulo puede crecer de manera independiente.
- Testabilidad: se pueden mockear los puertos para pruebas unitarias.
- Mantenibilidad: cambios en infraestructura no afectan la lógica de negocio.
- Flexibilidad tecnológica: la capa de infraestructura se puede reemplazar (Prisma, TypeORM, MongoDB, etc.) sin impactar la aplicación.