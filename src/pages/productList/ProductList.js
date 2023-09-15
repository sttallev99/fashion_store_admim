import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { productRows } from '../../dummyData';
import './productList.css'

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'product',
            headerName: 'Product',
            width: 600,
            renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img
                            className='ProductListImg'
                            alt=''
                            src={params.row.img}
                        />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 100},
        { field: 'status', headerName: 'Status', width: 150},
        { field: 'price', headerName: 'Price', width: 150},
        {
            field: 'action',
            headerName: 'Actions',
            width: 220,
            renderCell: (params) => {
              return (
                <>
                <Link to={`/product/${params.row.id}`} style={{textDecoration: 'none'}}>
                  <button className='productListEdit'>
                    <EditIcon style={{paddingRight: '5px'}}/>
                    Edit
                  </button>
                </Link>
                  <button className='productListDelete' onClick={() => handleDelete(params.row.id)}>
                    <DeleteIcon />
                    Delete
                  </button>
                </>
              )
            }
        }
    ]
    return (
        <div className='productList'>
        <DataGrid
            rows={data}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
        </div>
    )
}

export default ProductList
