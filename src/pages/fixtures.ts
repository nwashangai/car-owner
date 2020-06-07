export const initialState: any = {
  hasMore: true,
  isLoading: false,
  showRecords: false,
  limit: 20,
  filter: null,
  filterTrack: false,
  filters: [],
  records: []
};

export const filters = [
  {
    id: 1,
    start_year: 2007,
    end_year: 2009,
    gender: 'male',
    countries: ['Brazil', 'Ireland', 'Egypt', 'Peru'],
    colors: ['Green', 'Violet', 'Yellow', 'Blue']
  },
  {
    id: 2,
    start_year: 1990,
    end_year: 2010,
    gender: '',
    countries: ['Russia', 'Portugal', 'Vietnam', 'Croatia', 'Uganda', 'Iran'],
    colors: ['Teal', 'Maroon', 'Red', 'Orange']
  },
  {
    id: 3,
    start_year: 2001,
    end_year: 2009,
    gender: 'female',
    countries: ['Poland', 'Niger', 'Greece'],
    colors: ['Red', 'Aquamarine', 'Orange', 'Mauv']
  },
  {
    id: 4,
    start_year: 1990,
    end_year: 2000,
    gender: '',
    countries: ['United States', 'Portugal'],
    colors: ['Red']
  },
  {
    id: 5,
    start_year: 2000,
    end_year: 2009,
    gender: '',
    countries: [
      'Myanmar',
      'South Africa',
      'Nicaragua',
      'Finland',
      'Cuba',
      'Mexico'
    ],
    colors: []
  },
  {
    id: 6,
    start_year: 2005,
    end_year: 2010,
    gender: '',
    countries: ['South Africa', 'Cuba', 'Niger', 'Egypt', 'Uganda', 'Kenya'],
    colors: [
      'Red',
      'Aquamarine',
      'Orange',
      'Mauv',
      'Green',
      'Violet',
      'Yellow',
      'Blue',
      'Teal',
      'Maroon',
      'Orange'
    ]
  }
];

export const record = {
  id: 65765,
  first_name: 'Cornelius',
  last_name: 'Westbrook',
  email: 'cwestbrook7d@census.gov',
  country: 'Brazil',
  car_model: 'Honda',
  car_model_year: 2009,
  car_color: 'Yellow',
  gender: 'Male',
  job_title: 'Information Systems Manager',
  bio:
    'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
  createdAt: '2020-06-06T22:56:37.931Z',
  updatedAt: '2020-06-06T22:56:37.931Z'
};
