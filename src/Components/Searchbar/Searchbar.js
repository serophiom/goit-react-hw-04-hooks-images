import { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar ({ onSubmit }) {
    const [imageName, setImageName] = useState('');

    const handleNameChange = event => {
        setImageName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (imageName.trim() === '') {
            toast.error('Enter the image name');
            return;
        }
        
        onSubmit(imageName);
        setImageName('');
    };
    
    return (
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            </button>

            <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={imageName}
            onChange={handleNameChange}
            />
        </form>
        </header>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}