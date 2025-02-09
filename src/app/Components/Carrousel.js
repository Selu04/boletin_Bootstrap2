"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carrusel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/clash-royale-caratula.jpg" className="d-block w-50 mx-auto" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Clash Royale</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://miro.medium.com/v2/resize:fit:2000/1*6UxlCSE3hYFH6lSIHhaySA.jpeg" className="d-block w-50 mx-auto" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Clash of clans</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://supercell.com/images/e93a34598d3723641a72eb9ce02691f6/games_thumbnail_brawlstars.5cd76330.jpg" className="d-block w-50 mx-auto" alt=""/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Brawl Star</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}