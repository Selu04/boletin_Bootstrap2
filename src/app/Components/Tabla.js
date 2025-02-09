import React from 'react';

export default function Tabla() {
  const users = [
    { id: 1, name: 'Usuario 1', email: 'Usuario@gmail.com', registrationDate: '2022-10-21', status: 'Activo' },
    { id: 2, name: 'Usiario 2', email: 'Usuario2@gmail.com', registrationDate: '2025-12-25', status: 'Activo' },
    { id: 3, name: 'Usiario 3', email: 'Usuario3@gmail.com', registrationDate: '2022-12-25', status: 'Inactivo' },
  ];

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo electrónico</th>
            <th>Fecha de registro</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};