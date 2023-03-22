import React from 'react';
import { useState} from 'react';
import './User.css';

const Userdat = (props) => {
    console.log(props);

   const [mobile, setmobile] = useState('');
    const fullname=props.userinfo.name.first;
    const image=props.userinfo.picture.medium;
   const{email,phone}=props.userinfo;
   

   const showphone=()=>{
   setmobile(phone);
}

    return (
        <div className='demostyle'>
            <div className='imagesection'>
            <img src={image} alt="" height="150px" width="150px"/>

            </div>
            <div className='describtion'>
            <h6>{fullname}</h6>
            <p>{email}</p>
            <p> {mobile}</p>
            <button onClick={showphone}>phone</button>
            <button onClick={()=>{props.addmember(fullname)}}>Add memeber</button>
            </div>

        </div>
    );
};

export default Userdat;