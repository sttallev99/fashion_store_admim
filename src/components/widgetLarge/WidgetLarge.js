import './widgetLarge.css';

const WidgetLarge = () => {

    const Button = ({type}) => {
        return <button className={`widgetLargeButton ${type}`}>{type}</button>
    }
  return (
    <div className='widgetLarge'>
      <h3 className='widgetLargeTitle'>Latest Transactions</h3>
      <table className='widgetLargeTable'>
        <tr className='widgetLargeTr'>
            <th className='widgetLargeTh'>Customer</th>
            <th className='widgetLargeTh'>Date</th>
            <th className='widgetLargeTh'>Amount</th>
            <th className='widgetLargeTh'>Status</th>
        </tr>
        <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
                    alt='profile pricture'
                    className='widgetLargeImg'
                />
                <span className='widgetLargeName'>Susan Carol</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2023.</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'><Button type='Approved'/></td>
        </tr>
        <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
                    alt='profile pricture'
                    className='widgetLargeImg'
                />
                <span className='widgetLargeName'>Susan Carol</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2023.</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'><Button type='Declined'/></td>
        </tr>
        <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
                    alt='profile pricture'
                    className='widgetLargeImg'
                />
                <span className='widgetLargeName'>Susan Carol</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2023.</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'><Button type='Pending'/></td>
        </tr>
        <tr className='widgetLargeTr'>
            <td className='widgetLargeUser'>
                <img 
                    src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
                    alt='profile pricture'
                    className='widgetLargeImg'
                />
                <span className='widgetLargeName'>Susan Carol</span>
            </td>
            <td className='widgetLargeDate'>2 Jun 2023.</td>
            <td className='widgetLargeAmount'>$122.00</td>
            <td className='widgetLargeStatus'><Button type='Approved'/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLarge
