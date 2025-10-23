import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    titulo: '',
    empresa: '',
    periodo: '',
    ubicacion: '',
    descripcion: '',
    logros: '',
    tecnologias: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = 'https://hojadevidaapi.onrender.com/api/experiencias';
  const USER_ID = '68f69164c434421622bbbafc';

  // Cargar experiencias al iniciar
  useEffect(() => {
    fetchExperiences();
  }, []);

  // GET: obtener experiencias del usuario
  const fetchExperiences = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/usuario/${USER_ID}`);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      const data = await response.json();
      setExperiences(data);
    } catch (err) {
      setError('No se pudieron cargar las experiencias. ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST / PUT: crear o actualizar experiencia
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const body = { ...form, usuarioReferencia: USER_ID };
      let response;

      if (editingId) {
        // EDITAR (PUT)
        response = await fetch(`${API_BASE}/actualizar/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      } else {
        // CREAR (POST)
        response = await fetch(`${API_BASE}/crear`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      }

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      await fetchExperiences(); // recargar la lista
      resetForm();
    } catch (err) {
      setError('No se pudo guardar la experiencia: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // DELETE: eliminar experiencia
  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta experiencia?')) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/eliminar/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      await fetchExperiences(); // recargar la lista
    } catch (err) {
      setError('No se pudo eliminar la experiencia: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (exp) => {
    setForm(exp);
    setEditingId(exp._id || exp.id);
  };

  const resetForm = () => {
    setForm({
      titulo: '',
      empresa: '',
      periodo: '',
      ubicacion: '',
      descripcion: '',
      logros: '',
      tecnologias: ''
    });
    setEditingId(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="main-admin">
      <h1>Panel Administrativo - Experiencias Profesionales</h1>
      {error && <p className="error">{error}</p>}

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="periodo">Período</label>
          <input
            type="text"
            id="periodo"
            name="periodo"
            value={form.periodo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ubicacion">Ubicación</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={form.ubicacion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logros">Logros (separados por comas)</label>
          <textarea
            id="logros"
            name="logros"
            value={form.logros}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tecnologias">Tecnologías (separadas por comas)</label>
          <textarea
            id="tecnologias"
            name="tecnologias"
            value={form.tecnologias}
            onChange={handleChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {editingId ? 'Actualizar' : 'Crear'} Experiencia
          </button>
          {editingId && <button type="button" onClick={resetForm}>Cancelar</button>}
        </div>
      </form>

      {/* LISTA DE EXPERIENCIAS */}
      <h2>Lista de Experiencias</h2>
      {loading && <p>Cargando...</p>}
      <ul className="experiences-list">
        {experiences.map((exp) => (
          <li key={exp._id || exp.id} className="experience-item">
            <h3>{exp.titulo}</h3>
            <p><strong>Empresa:</strong> {exp.empresa}</p>
            <p><strong>Período:</strong> {exp.periodo}</p>
            <p><strong>Ubicación:</strong> {exp.ubicacion}</p>
            <p><strong>Descripción:</strong> {exp.descripcion}</p>
            <p><strong>Logros:</strong> {exp.logros}</p>
            <p><strong>Tecnologías:</strong> {exp.tecnologias}</p>
            <button type="button" onClick={() => handleEdit(exp)}>Editar</button>
            <button type="button" onClick={() => handleDelete(exp._id || exp.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Admin;
