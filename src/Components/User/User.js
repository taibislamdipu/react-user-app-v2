import React, { useEffect } from 'react';
import './User.css';
import { useState } from 'react';
import fakeData from '../../fakeData/user-details';
import People from '../People/People';
import Cart from '../Cart/Cart';


const User = () => {

    const threeUser = fakeData.slice(0, 15);
    const [users, setUsers] = useState(threeUser);
    const [cart, setCart] = useState([]);


    const addUserEventHandler = (user) => {
        console.log('add user clicked', user);
        const newCart = [...cart, user];
        setCart(newCart);
    }


    return (
        <div className="user-container">
            <div className="user-info">
                <h1>All Users</h1>
                <p>Total users: {users.length}</p>

                {
                    users.map(u => <People
                        user={u}
                        addUserEventHandler={addUserEventHandler}

                    ></People>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;