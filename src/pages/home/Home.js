import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title='Users Analytics' data={userData}/>
    </div>
  )
}

export default Home
