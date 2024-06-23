import React from 'react';
import '../styles.css';

const FormField = ({ type, label, name, value, onChange, options, error, ...rest }) => {
    return (
        <div className="form-field"> {/* Added className for styling */}
            <label>{label}</label>
            {type === 'select' ? (
                <select name={name} value={value} onChange={onChange} {...rest}>
                    <option value="">Select {label}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === 'checkbox' ? (
                options.map((option) => (
                    <div key={option}>
                        <input
                            type="checkbox"
                            id={option}
                            name={name}
                            value={option}
                            checked={value.includes(option)}
                            onChange={onChange}
                            {...rest}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            )}
            {error && <p className="error">{error}</p>} {/* Used className for error styling */}
        </div>
    );
};

export default FormField;