import React from 'react';
import { Link } from 'react-router-dom';
import './Searvices.css'



const Searvices = (props) => {
    const{serviceID, serviceName, serviceDetail, imageUrl } = props.servive;
    return (
        <div id='services'>     
        <div className="col card_style shadow p-3 mb-5 bg-body rounded">
          <div className="card h-100 ">
            <div className='card-img-hover'>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{serviceName}</h5>
              <p className="card-text">{serviceDetail}</p>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto mb-2">
                                        
            <Link to={`/booking/${serviceID}`}>
            <button  type="button" className="btn btn-warning">Booking {serviceName}</button>
        </Link>
             
             
            
                      
            </div>
          </div>
        </div>
              </div>
    );
};

export default Searvices;