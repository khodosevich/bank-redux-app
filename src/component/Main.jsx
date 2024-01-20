import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CASH, ADD_CUSTOMER, GET_CASH, DELETE_CUSTOMER } from '../redux/types';
import MyBtnStyle from './MyBtnStyle';
import {addCash, getCash} from '../redux/cashReducer';
import {addCustomerR, deleteCustomerR, addAnyCustomerR} from '../redux/customerReducer';
import { fetchCustomer } from '../redux/asyncAction/customer';

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
        dispatch(addCustomerR({name: customer}))
    }

    const deleteCustomer = (name) => {
        dispatch(deleteCustomerR({name: name}))
    }

    const addAnyCustomer = async () => {
       dispatch(fetchCustomer())
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
                <MyBtnStyle name="add clients from DB" handler={addAnyCustomer}/>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '10px' , flexWrap: 'wrap'}}>
                {
                   customers.length > 0 ? customers.map((item,index) => (
                        <p 
                        style={{ fontSize: '16px', fontWeight: 'bold', outline: 'none', border: '1px solid grey', padding: '5px 20px', margin: '10px',cursor: 'pointer'}} 
                       
                        onClick={() => deleteCustomer(item.name)} 
                        
                        key={index}>
                        
                            {item.name}
                        
                        </p>
                   )) :
                   <p>No customers</p>
                }
            </div>

        </div>
    )
}

export default Main;