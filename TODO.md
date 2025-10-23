# TODO: Integrar Panel Administrativo para Experiencias Profesionales

## Pasos a Completar

1. **Crear componente Admin.js**: Implementar el componente principal para el panel administrativo con CRUD para experiencias profesionales.
   - Incluir formulario para crear/editar experiencias.
   - Lista de experiencias con opciones para editar y eliminar.
   - Usar fetch para consumir la API (endpoints asumidos: GET /api/experiences, POST /api/experiences, PUT /api/experiences/:id, DELETE /api/experiences/:id).

2. **Agregar ruta /admin en App.js**: Actualizar el enrutador para incluir la nueva ruta al componente Admin.

3. **Implementar lógica CRUD**:
   - Función para obtener experiencias (GET).
   - Función para crear experiencia (POST).
   - Función para actualizar experiencia (PUT).
   - Función para eliminar experiencia (DELETE).
   - Manejar estado con useState y useEffect.

4. **Estilizar el panel**: Usar CSS existente o agregar estilos básicos para que sea funcional y estéticamente coherente con el portafolio.

5. **Probar integración**: Ejecutar el proyecto y verificar que el panel funcione (aunque la API no esté lista, simular o manejar errores).

## Estado Actual
- [x] Paso 1: Crear Admin.js
- [x] Paso 2: Actualizar App.js
- [x] Paso 3: Implementar lógica CRUD
- [x] Paso 4: Estilizar
- [x] Paso 5: Probar
