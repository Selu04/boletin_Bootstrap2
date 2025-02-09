import React from 'react';

export default function Precios () {
  const plans = [
    {
      name: 'Básico',
      price: '$20/mes',
      features: ['Característica 1', 'Característica 2'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$40/mes',
      features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4', 'Característica 5','Característica 6'],
      highlight: true,
    },
    {
      name: 'Premium',
      price: '$60/mes',
      features: ['Característica 1', 'Característica 2', 'Característica 3', 'Característica 4', 'Característica 5','Característica 6','Característica 7','Característica 8'],
      highlight: false,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {plans.map((plan, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <div className={`card h-100 ${plan.highlight ? 'border-primary bg-light' : ''}`}>
              <div className="card-header text-center">
                <h4>{plan.name}</h4>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{plan.price}</h5>
                <ul className="list-unstyled">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="text-center mt-4">
                  <button className="btn btn-primary">Seleccionar plan</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};