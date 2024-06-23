import { useState } from 'react';

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: val,
        }));
    };

    return {
        formData,
        setFormData,
        handleInputChange,
    };
};

export default useForm;