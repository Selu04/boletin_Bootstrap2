export default function Modal () {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
          Regístrate
        </button>
  
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="registerModalLabel">Formulario de Registro</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" id="username" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="confirmPassword" required />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };