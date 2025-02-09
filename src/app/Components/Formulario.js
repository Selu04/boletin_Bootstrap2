"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Formulario() {
    return (
        <form className="was-validated">
            <div className="form-group">
                <label htmlFor="name" className="form-label">Usuario</label>
                <input type="text" className="form-control" id="username" required/>
                <div className="invalid-feedback">
                    Username
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Correo</label>
                <input type="email" className="form-control" id="email" required/>
                <div className="invalid-feedback">
                  Correo Electronico
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
                <div className="invalid-feedback">
                    Escribe algo
                </div>
            </div>
            <button type="submit" className="btn btn-primary d-none d-sm-block d-md-none d-lg-block">Enviar</button>
        </form>
    );
}