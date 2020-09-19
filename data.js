var INPUT_DATA = {
  api_version: '1.0',
  chart: {
    id: '2',
    name: 'MD',
    description: '',
    parent_id: '1',
    staff_department: 'Y',
    manager_id: 'B01',
    dataFields: [{ name: 'Location', value: '', type: 'text' }],
    children: [
      {
        id: 'a798e6cf-0b58-067e-44ef-237f3b3b253a',
        name: 'Sales Executive',
        description: '',
        parent_id: '2',
        staff_department: 'N',
        manager_id: 'B03',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: 'A1',
            name: 'Asst.',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            manager_id: 'B05',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: 'A2',
            name: 'Asst.',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            manager_id: 'B06',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: true
      },
      {
        id: '01268004-f249-5d93-41e4-c23947f11a62',
        name: 'Sales Executive',
        description: '',
        parent_id: '2',
        staff_department: 'N',
        manager_id: 'B04',
        dataFields: [{ name: 'Location', value: '', type: 'text' }],
        children: [
          {
            id: 'B1',
            name: 'Asst.',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            manager_id: 'B07',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          },
          {
            id: 'B2',
            name: 'Asst.',
            description: '',
            parent_id: '2',
            staff_department: 'N',
            manager_id: 'B08',
            dataFields: [
              { name: 'Location', value: '', type: 'text' }
            ],
            children: [],
            showChildren: false
          }
        ],
        showChildren: true
      }
    ],
    showChildren: true
  },
  people: [
    {
      id: 'B01',
      name: 'john smith',
      photo: 'B01',
      main_role: '',
      function: 'a',
      homepage: 'nu.nl',
      street: 'Kalverstraat 1',
      email: 'bigbos@someaddress.nl',
      phone: '0345-394930203',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'chief executive officer'
    },
    {
      id: 'B03',
      name: 'alex',
      photo: 'B03',
      main_role: '',
      function: '',
      homepage: 'linkedin.com',
      street: 'Vijzelstraat 143a',
      email: '',
      phone: '0345-394930204',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'CFO'
    },
    {
      id: 'B02',
      name: 'S. Talker',
      photo: 'B02',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Molenstraat 6',
      email: '',
      phone: '0345-394930205',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: 'HR'
    },
    {
      id: 'df',
      name: 'Big Boss1',
      photo: '',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Kerkwerg 15',
      email: '',
      phone: '0345-394930206',
      country: 'Netherlands',
      city: 'Amsterdam',
      functionName: ''
    },
    {
      id: 'B05',
      name: 'Joseph',
      photo: 'B05',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Dorpstraat 9',
      email: 'MRX@somecomplany.mail',
      phone: '0345-394930207',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    },
    {
      id: 'B04',
      name: 'daniel',
      photo: 'B04',
      main_role: '',
      function: '',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Stationslaan 88',
      email: '',
      phone: '0345-394930208',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: 'CIO'
    },
    {
      id: 'B06',
      name: 'michael',
      photo: '',
      main_role: '',
      function: 'web',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Het verdun 5',
      email: '',
      phone: '0345-394930209',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    },
    {
      id: 'B07',
      name: 'jack',
      photo: '',
      main_role: '',
      function: 'web',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Het verdun 5',
      email: '',
      phone: '0345-394930209',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    },
    {
      id: 'B08',
      name: 'swagger',
      photo: '',
      main_role: '',
      function: 'web',
      homepage: 'https://www.linkedin.com/company/philips/',
      street: 'Het verdun 5',
      email: '',
      phone: '0345-394930209',
      country: 'Netherlands',
      city: 'Utrecht',
      functionName: ''
    }
  ],

  assignments: [
    {
      department_id: '6_2',
      id: 0,
      person_id: 'B01',
      role: 'strategy consultanting'
    },
    {
      department_id: '6_2',
      id: 1,
      person_id: 'B03',
      role: 'scrum master'
    },
    {
      department_id: '6_2',
      id: 4,
      person_id: 'B05',
      role: 'ux/ui designer'
    },
    {
      department_id: '6_2',
      id: 5,
      person_id: 'B04',
      role: 'new tester'
    },
    { department_id: '6_2', id: 6, person_id: '44', role: 'tester' },
    {
      department_id: '5',
      id: 9,
      person_id: 'al;skdj;lasdjf',
      role: ''
    },
    {
      department_id: '6_2',
      id: 10,
      person_id: 'mrnew',
      role: 'new job'
    }
  ]
}
var UPDATED_ON = '28-07-2020'
