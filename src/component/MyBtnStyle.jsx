import React from "react";


const MyBtnStyle = ({name, handler}) => {
    return (
        <button
        onClick={handler}
        style={{
                fontSize: '16px', 
                fontWeight: 'bold', 
                outline: 'none',
                border: '1px solid grey', 
                padding: '5px 20px', 
                margin: '10px',
                backgroundColor: 'lightblue',
                borderRadius: '5px',
                cursor: 'pointer'}}
            >
            {name}
        </button>
    );
};

export default MyBtnStyle;