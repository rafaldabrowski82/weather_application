import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="text"
                   placeholder="Wpisz nazwę miasta"
                   onChange={props.change}
            />
            <button>Wyszukaj miasto</button>
        </form>
    )
};

export default Form;