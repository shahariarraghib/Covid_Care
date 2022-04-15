import React, { useEffect, useState } from 'react';
import Searvices from '../Components/Searvices/Searvices';

const ToGetData = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{

        fetch('/servicesData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             <h1 className='bg-info p-4 fw-bolder'>Services We’re Providing</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-1">
            {
                services.map(service => <Searvices
                servive ={service}>

                </Searvices>)
            
              
            }

         </div>
        </div>
    );
};

export default ToGetData;