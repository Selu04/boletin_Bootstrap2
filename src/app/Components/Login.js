export default function Login () {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="text-center mb-4">Iniciar sesión</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </div>
          </form>
          <div className="text-center mt-3">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>
    );
  };