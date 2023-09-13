import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './userList.css';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { 
        field: 'avatar', 
        headerName: 'Avatar', 
        width: 220,
        renderCell: (params) => {
          return (
            <div className='userListUser'>
              <img className='userListImg' src={params.row.avatar} alt=''/>
              {params.row.username}
            </div>
          )
        }
      },
      { field: 'username', headerName: 'Username', width: 200 },
      { field: 'email', headerName: 'E-mail',  width: 250, },
      { field: 'status', headerName: 'Status', width: 150 },
      { field: 'transaction', headerName: 'Transaction Volume', width: 250 },
      {
        field: 'action',
        headerName: 'Actions',
        width: 220,
        renderCell: (params) => {
          return (
            <>
            <Link to={`/user/${params.row.id}`} style={{textDecoration: 'none'}}>
              <button className='userListEdit'>
                <EditIcon style={{paddingRight: '5px'}}/>
                Edit
              </button>
            </Link>
              <button className='userListDelete' onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
                Delete
              </button>
            </>
          )
        }
      }
  ];


  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 10}
            }
        }}
        // pageSizeOption={[5,10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
