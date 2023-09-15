import { Link } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';

import './product.css';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';

const Product = () => {
  return (
    <div className='product'>
      <div className='titleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
            <button className='productAddButton'>Cteate</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
            <Chart title='Sales Performance' data={productData} dataKey='Sales'/>
        </div>
        <div className='productTopRight'>
            <div className='productInfo'>
                <div className='productInfoTop'>
                    <img
                        className='productInfoImg'
                        alt=''
                        src='https://s13emagst.akamaized.net/products/21114/21113101/images/res_90440195468b1f4f121813a36324bc5d.jpeg?width=450&height=450&hash=E6FF00F23D82BE7FD6E0279FC71375C8'
                    />
                    <span className='productName'>Apple Airpods 2.0 pro</span>
                </div>
                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>ID: </span>
                        <span className='productInfoValue'>123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>Sales: </span>
                        <span className='productInfoValue'>5264</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>Active: </span>
                        <span className='productInfoValue'>yes</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>In Stock: </span>
                        <span className='productInfoValue'>no</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
            <div className='productFormLeft'>
                <label>Product Name</label>
                <input type='text' placeholder='Apple Aitpods' />
                <label>In Stock</label>
                <select name='inStock' id='inStock'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                <label>Active</label>
                <select name='active' id='active'>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select> 
            </div>
            <div className='productFormRight'>
                <div className='productUpload'>
                    <img
                        src='https://s13emagst.akamaized.net/products/21114/21113101/images/res_90440195468b1f4f121813a36324bc5d.jpeg?width=450&height=450&hash=E6FF00F23D82BE7FD6E0279FC71375C8'
                        alt=''
                        className='productUploadImg'
                    />
                    <label for='file'>
                        <PublishIcon fontSize='large' style={{cursor: 'pointer'}}/>
                    </label>
                    <input type='file' id='file' style={{display: 'none'}} />
                </div>
                <button className='productButton'>Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Product
