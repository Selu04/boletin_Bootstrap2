export default function Tarjetas(){
    const cards = [
        {
          image: 'https://i.imgur.com/cpKB8GN.jpeg',
          title: 'Hamster 1',
          description: 'Hamsters.',
        },
        {
          image: 'https://i.imgur.com/xBntSnV.jpeg',
          title: 'Hamster 2',
          description: 'Hamsters.',
        },
        {
          image: 'https://i.imgur.com/AAr6Gi7.jpeg',
          title: 'Hamster 3',
          description: 'Hamsters.',
        },
    ];
    
  
    return (
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary">Más información</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };