import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import './productStyle.css'

export default () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState('');
    const [newNumber, setNewNumber] = useState('');

    function isValid(newProd,action) {
        const pattern = /^[a-zA-Zа-яА-ЯёЁ]+$/
        if (newProd.number <= 1000 && pattern.test(newProd.name)) {
            dispatch(action)
        }
        else if (!pattern.test(newProd.name)) {
            alert("Введіть коректні дані в поле Caption")
        }
        else {
            alert("Введіть коректні дані в поле Amount(не більше 1000)")
        }
    }

    const addProduct = () => {
        const newProd = {
            name: newProduct,
            number: newNumber,
            id: 'id' + Date.now()
        }
        const action = {
            type: 'addProduct',
            payload: newProd
        }
        setNewProduct('');
        setNewNumber('')
        isValid(newProd,action)
    }

    return <div className="block">
        <label htmlFor="caption">Caption</label>
        <input id="caption" value={newProduct} onChange={(e) => setNewProduct(e.target.value)}></input>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={newNumber} onChange={(e) => setNewNumber(e.target.value)}></input>
        <button onClick={addProduct}>Add</button>
    </div>
}