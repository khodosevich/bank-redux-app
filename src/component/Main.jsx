import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CASH, ADD_CUSTOMER, GET_CASH, GET_CUSTOMER } from '../redux/types';

const Main = () => {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash) 
    const customers = useSelector(state => state.customer.customers)

    const addMoney = (money) => {
        dispatch({type: ADD_CASH, payload: money})
    }

    const getMoney = (money) => {
        dispatch({type: GET_CASH, payload: money})
    }

    const addCustomer = (customer) => {
        dispatch({type: ADD_CUSTOMER, payload: customer})
    }

    const getCustomer = () => {
        dispatch({type: GET_CUSTOMER})
    }

    return (
        <div style={{fontSize: '50px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>

            <div>
              {cash}
            </div>

            <div>
                <button onClick={() => addMoney(Number(prompt('Enter amount')))}>+</button>
                <button onClick={() => getMoney(Number(prompt('Enter amount')))}>-</button>
            </div>
          
            <div>
                <button onClick={() => addCustomer(prompt('Enter name'))}>add customer</button>
                <button onClick={() => getCustomer}>get customers</button>
            </div>

            <div>
                {
                   customers && customers.map((item,index) => (
                        <div key={index}>{item}</div>
                   ))
                }
            </div>

        </div>
    )
}

export default Main;