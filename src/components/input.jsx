import PropTypes from "prop-types";
import { useState } from "react"

export const Input = ({ onSearch }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim()){
            onSearch(inputValue.trim());
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <input
                type='text'
                placeholder='Buscar'
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
}

Input.propTypes = {
    onSearch: PropTypes.func.isRequired,
}