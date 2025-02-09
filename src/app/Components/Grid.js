import Card from "./Card";

export default function Grid(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-4">
                    <Card image="https://content-cocina.lecturas.com/medio/2024/09/09/patatas-al-horno-con-salsa-de-ajo-y-perejil_c22e3daa_1427917867_240909124516_1200x1200.jpg" nombre="patatas"/>
                </div>
            </div>
        </div>
    )
}