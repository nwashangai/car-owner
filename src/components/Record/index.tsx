// react libraries
import * as React from 'react';

// Components
import Color from 'components/Color';

// Styles
import './Record.scss';

export default ({ record }: any) => (
  <div className="card record">
    <div className="record__img">
      <img src={require('assets/images/car.png')} alt="car" />
    </div>
    <div className="record__details">
      <div className="record__car-owner">
        <span>
          {record.first_name} {record.last_name}
        </span>
      </div>
      <div className="record__car-details">
        <div>
          <span>Brand</span>
          <span>{record.car_model}</span>
        </div>
        <div>
          <span>Year</span>
          <span>{record.car_model_year}</span>
        </div>
        <div>
          <span>Color</span>
          <span>
            <Color color={record.car_color} />
          </span>
        </div>
      </div>
      <div className="record__owner-details">
        <div>
          <span>Country</span>
          <span>{record.country}</span>
        </div>
        <div>
          <span>Gender</span>
          <span>{record.gender}</span>
        </div>
        <div>
          <span>Job</span>
          <span>{record.job_title}</span>
        </div>
      </div>
      <div className="record__email">
        <span>Email: </span>
        <span>{record.email}</span>
      </div>
      <div className="record__bio">
        <span>Bio: </span>
        <div>{record.bio}</div>
      </div>
    </div>
  </div>
);
