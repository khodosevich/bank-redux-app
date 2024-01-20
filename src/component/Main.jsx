import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CASH, ADD_CUSTOMER, GET_CASH, DELETE_CUSTOMER } from '../redux/types';
import MyBtnStyle from './MyBtnStyle';
import {addCash, getCash} from '../redux/cashReducer';
import {addCustomerR, deleteCustomerR} from '../redux/customerReducer';

const Main = () => {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash) 
    const customers = useSelector(state => state.customer.customers)

    const addMoney = (money) => {
        dispatch(addCash(money))
    }

    const getMoney = (money) => {
        dispatch(getCash(money))
    }

    const addCustomer = (customer) => {
        dispatch(addCustomerR(customer))
    }

    const deleteCustomer = (name) => {
        dispatch(deleteCustomerR(name))
    }

    return (
        <div style={{fontSize: '50px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>

            <div>
              {cash}
            </div>

            <div>
                <MyBtnStyle name="add" handler={() => addMoney(Number(prompt('Enter amount'))) }/>
                <MyBtnStyle name="get" handler={() => getMoney(Number(prompt('Enter amount'))) }/>
            </div>
          
            <div>
                <MyBtnStyle name="add customer" handler={() => addCustomer(prompt('Enter name')) }/>
                <MyBtnStyle name="delete customer" handler={() => deleteCustomer(prompt('Enter name')) }/>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                {
                   customers.length > 0 ? customers.map((item,index) => (
                        <p style={{cursor: 'pointer', ":hover": {color: "red"}}} onClick={() => deleteCustomer(item)} key={index}>{item}</p>
                   )) :
                   <p>No customers</p>
                }
            </div>

        </div>
    )
}

export default Main;