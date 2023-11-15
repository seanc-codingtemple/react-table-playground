import React from 'react';
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from './components/TableTemplate/Table'; // new
import LeagueStandings,{ViewLeaguePill} from './components/LeagueStandings/LeagueStandings'
import LeagueSchedule from './components/LeagueSchedule/LeagueSchedule'
import LeagueSearchList from './components/LeagueSearchList/LeagueScheduleList'
import AdminLeagueStandings from './components/AdminLeagueStandings/AdminLeagueStandings'
import axios from 'axios';
import { useEffect, useState } from 'react';






const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 27,
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Inactive',
      role: 'Owner',
      age: 43,
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      role: 'Member',
      age: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Offline',
      role: 'Member',
      age: 29,
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Inactive',
      role: 'Admin',
      age: 36,
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      role: 'Member',
      age: 24,
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];
  return [...data, ...data, ...data];
};

const getLeagueData = () => {
  const league_data = [
    {
      name: 'Dart Daddies',
      email: 'depasqu1@gmail.com',
      title: 'Clover Sports and Leisure',
      department: 'Optimization',
      status: 'Active',
      role: 'View League',
      age: 27,
      imgUrl:
        'https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Inactive',
      role: 'Owner',
      age: 43,
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      role: 'Member',
      age: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Offline',
      role: 'Member',
      age: 29,
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Inactive',
      role: 'Admin',
      age: 36,
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      role: 'Member',
      age: 24,
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];
  return [...league_data, ...league_data, ...league_data];
};

function App() {
  

  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: AvatarCell,
        imgAccessor: 'imgUrl',
        emailAccessor: 'email',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: StatusPill,
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Role',
        accessor: 'role',
        Filter: SelectColumnFilter, // new
        filter: 'includes',
      },
    ],
    []
  );

  const league_standings_columns = React.useMemo(
    () => [
      {
        Header: 'League Name',
        accessor: 'name',
        Cell: AvatarCell,
        imgAccessor: 'imgUrl',
        emailAccessor: 'email',
      },
      {
        Header: 'League Bar',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter, // new
        filter: 'includes',
        Cell: StatusPill,
      },
      {
        Header: 'No.Teams',
        accessor: 'age',
      },
      {
        Header: 'Role',
        accessor: 'role',
        Filter: SelectColumnFilter,// new
        filter: 'includes',
        Cell: ViewLeaguePill,
      },
   
    ],
    []
  );


  const data = React.useMemo(() => getData(), []);
  const league_data= React.useMemo(() => getLeagueData(),[])
  

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      <main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className=''>
          
        </div>
        <div className='mt-6'>
        <h1 className='text-xl font-semibold'>
            TABLE TEMPLATE
          </h1>
          <Table columns={columns} data={data} />
          <h1 className='text-xl font-semibold'>
            LEAGUE STANDINGS
          </h1>
          <LeagueStandings columns={league_standings_columns} data={league_data} />
          <h1 className='text-xl font-semibold'>
            LEAGUE SCHEDULE
          </h1>
          <LeagueSchedule columns={columns} data={data} />
          <h1 className='text-xl font-semibold'>
            LEAGUE SEARCH LIST
          </h1>
          <LeagueSearchList columns={columns} data={data} />
          <h1 className='text-xl font-semibold'>
            LEAGUE SEARCH LIST
          </h1>
          <AdminLeagueStandings columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
