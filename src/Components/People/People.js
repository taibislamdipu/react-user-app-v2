import React from 'react';
import './People.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const People = (props) => {
    console.log(props.user.name);
    const { name, image, salary } = props.user;
    return (
        <div className="user">

            <div>
                <img src={image} alt="" />
            </div>

            <div>
                <h3>This is user</h3>
                <h4 className="user-name">Name: {name}</h4>
                <p>Salary: $ {salary}</p>
                <button className="add-user" onClick={() => props.addUserEventHandler(props.user)}> <FontAwesomeIcon icon={faUserPlus} /> Add User</button>
            </div>

        </div >
    );
};

export default People;


