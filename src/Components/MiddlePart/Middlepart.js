import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
const Middlepart = () => {
    return (
       <>
       <div class="card mb-3 container p-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fs-1 mt-3 fw-bolder">Welcome To Our Digital <span className='text-info'>Healthcare</span> Services Solutions</h5>
        
        <div className='p-5 mt-3 fw-normal fs-5'>
        <p class="card-text d-flex justify-content-start"> <RadioButtonCheckedIcon className='mt-1' color="success"/> Digital Laboratory & Physicians</p>
        <p class="card-text d-flex justify-content-start"> <RadioButtonCheckedIcon className='mt-1' color="success"/>Provide 24/7 Support Services</p>
        <p class="card-text d-flex justify-content-start"><RadioButtonCheckedIcon className='mt-1' color="success"/>Safety Health Environment</p>
        <p class="card-text d-flex justify-content-start"> <RadioButtonCheckedIcon className='mt-1' color="success"/>Most Experienced Doctors</p>
        <p class="card-text d-flex justify-content-start"><RadioButtonCheckedIcon className='mt-1' color="success"/>Low Cost Services Solution</p>
        </div>
        
      </div>
    </div>
  </div>
</div>
       
       </>
    );
};

export default Middlepart;