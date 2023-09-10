import './widgetSmall.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
        <span className='widgetSmallTitle'>New Join Members</span>
        <ul className='widgetSmallList'>
            <li className='widgetSmallListItem'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' 
                    alt='' 
                    className='widgetSmallImg' 
                />
                <div className='widgetSmallUser'>
                    <span className='widgetSmallUsername'>George Stalev</span>
                    <span className='widgetSmallUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmallButton'>
                    <VisibilityIcon className='widgetSmallIcon'/>
                    Display
                </button>
            </li>
            <li className='widgetSmallListItem'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' 
                    alt='' 
                    className='widgetSmallImg' />
                <div className='widgetSmallUser'>
                    <span className='widgetSmallUsername'>George Stalev</span>
                    <span className='widgetSmallUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmallButton'>
                    <VisibilityIcon className='widgetSmallIcon'/>
                    Display
                </button>
            </li>
            <li className='widgetSmallListItem'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' 
                    alt='' 
                    className='widgetSmallImg' />
                <div className='widgetSmallUser'>
                    <span className='widgetSmallUsername'>George Stalev</span>
                    <span className='widgetSmallUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmallButton'>
                    <VisibilityIcon className='widgetSmallIcon'/>
                    Display
                </button>
            </li>
            <li className='widgetSmallListItem'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' 
                    alt='' 
                    className='widgetSmallImg' />
                <div className='widgetSmallUser'>
                    <span className='widgetSmallUsername'>George Stalev</span>
                    <span className='widgetSmallUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmallButton'>
                    <VisibilityIcon className='widgetSmallIcon'/>
                    Display
                </button>
            </li>
            <li className='widgetSmallListItem'>
                <img 
                src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' 
                alt='' 
                className='widgetSmallImg' />
                <div className='widgetSmallUser'>
                    <span className='widgetSmallUsername'>George Stalev</span>
                    <span className='widgetSmallUserTitle'>Software Engineer</span>
                </div>
                <button className='widgetSmallButton'>
                    <VisibilityIcon className='widgetSmallIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSmall
