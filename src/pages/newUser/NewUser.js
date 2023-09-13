import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
            <label>Username</label>
            <input type='text' placeholder='Jhon' />
        </div>
        <div className='newUserItem'>
            <label>Full Name</label>
            <input type='text' placeholder='Jhon Smith' />
        </div>
        <div className='newUserItem'>
            <label>E-mail</label>
            <input type='email' placeholder='jhon@gmail.com' />
        </div>
        <div className='newUserItem'>
            <label>Password</label>
            <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
            <label>Phone number</label>
            <input type='text' placeholder='+1 123 456 789' />
        </div>
        <div className='newUserItem'>
            <label>Address</label>
            <input type='text' placeholder='New York | USA' />
        </div>
        <div className='newUserItem'>
            <label>Gender</label>
            <div className='newUserGender'>
                <input type='radio' name='gender' id='male' value='male' />
                <label for='male'>Male</label>
                <input type='radio' name='gender' id='female' value='male' />
                <label for='female'>Female</label>
                <input type='radio' name='gender' id='other' value='male' />
                <label for='other'>Other</label>
            </div>
        </div>
        <div className='newUserItem'>
            <label>Active</label>
            <select className='newUserSelect' name='active' id='active'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>  
  )
}

export default NewUser
