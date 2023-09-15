import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title='Users Analytics' data={userData} dataKey='Active User'/>
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
