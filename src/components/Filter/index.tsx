// react libraries
import * as React from 'react';

// Components
import Card from 'components/Card';
import Color from 'components/Color';
import Tag from 'components/Tag';

// Styles
import './Filter.scss';

// const countries = [
//   'Russia',
//   'Portugal',
//   'Vietnam',
//   'Croatia',
//   'Uganda',
//   'Iran'
// ];

// const colors = [
//   'Red',
//   'Aquamarine',
//   'Orange',
//   'Mauv',
//   'Green',
//   'Violet',
//   'Yellow',
//   'Blue',
//   'Teal',
//   'Maroon',
//   'Orange'
// ];

export default ({ filter, onClick }: any) => (
  <Card classes="card filter" attributes-id={filter.id} onClick={onClick}>
    <div className="filter__interval">
      <span>
        {filter.start_year ? filter.start_year : '*'} -{' '}
        {filter.end_year ? filter.end_year : '*'}
      </span>
    </div>
    <div className="filter__gender">
      {filter.gender
        ? filter.gender.charAt(0).toUpperCase() +
          filter.gender.slice(1).toLowerCase()
        : ''}
    </div>
    <div className="filter__countries">
      {filter.countries.map((country: string, ind: number) => (
        <Tag tag={country} key={ind} />
      ))}
    </div>
    <div className="filter__colors">
      {filter.colors.map((color: string, ind: number) => (
        <Color color={color} key={ind} />
      ))}
    </div>
  </Card>
);
