import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { depositeAction, withdrawAction } from '../redux/BankSlice';

export const ReduxBank = () => {

    const [balanceAmt, setBalanceAmt] = useState(0);
    const dispatch = useDispatch();
    const bank = useSelector((state)=>state.bank);

    const deposite = () => {
        console.log("balance...", balanceAmt);
        dispatch(depositeAction(parseFloat(balanceAmt)));
    }

    const withdraw = () => {
        if(bank.balance  < parseFloat(balanceAmt)) {
            alert("insufficient balance");
            return;
        }
        console.log("balance...", balanceAmt);
        dispatch(withdrawAction(parseFloat(balanceAmt)));

    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>ReduxBank</h2>

            <div style={styles.formGroup}>
                <input
                    type="text"
                    placeholder="Enter amount to deposit"
                    onChange={(event) => setBalanceAmt(event.target.value)}
                    style={styles.input}
                />
                <button onClick={deposite} style={{ ...styles.button, backgroundColor: "#007bff" }}>
                    DEPOSIT
                </button>
            </div>

            <div style={styles.formGroup}>
                <input
                    type="text"
                    placeholder="Enter amount to withdraw"
                    onChange={(event) => setBalanceAmt(event.target.value)}
                    style={styles.input}
                />
                <button onClick={withdraw} style={{ ...styles.button, backgroundColor: "#dc3545" }}>
                    WITHDRAW
                </button>
            </div>
        </div>
    )
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    maxWidth: "400px",
    margin: "50px auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    marginBottom: "30px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "80%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};