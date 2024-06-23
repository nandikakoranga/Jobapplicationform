import React, { useState } from 'react';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import useForm from '../hooks/useForm';
import useValidation from '../hooks/useValidation';
import '../styles.css';
const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        applyingFor: '',
        relevantExperience: '',
        portfolioURL: '',
        managementExperience: '',
        additionalSkills: [],
        preferredInterviewTime: '',
    });

    const { errors, validateForm } = useValidation();
    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(formData)) {
            // Store submitted data for display
            setSubmittedData(formData);
            // Optionally: You can perform further actions here, like sending data to a server
        } else {
            // Handle form validation errors
            alert('Please fill out all required fields correctly.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? [...formData[name], value] : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: val,
        }));
    };

    return (
        <div>
            {submittedData ? ( // Display submitted data if available
                <div>
                    <h2>Form Submission Summary</h2>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormField
                        type="text"
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                        required
                    />
                    <FormField
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        required
                    />
                    <FormField
                        type="tel"
                        label="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        error={errors.phoneNumber}
                        required
                    />
                    <FormField
                        type="select"
                        label="Applying for Position"
                        name="applyingFor"
                        value={formData.applyingFor}
                        onChange={handleInputChange}
                        options={['Developer', 'Designer', 'Manager']}
                        error={errors.applyingFor}
                        required
                    />
                    {formData.applyingFor === 'Developer' || formData.applyingFor === 'Designer' ? (
                        <FormField
                            type="number"
                            label="Relevant Experience (years)"
                            name="relevantExperience"
                            value={formData.relevantExperience}
                            onChange={handleInputChange}
                            error={errors.relevantExperience}
                            required={formData.applyingFor === 'Developer' || formData.applyingFor === 'Designer'}
                            min={1}
                        />
                    ) : null}
                    {formData.applyingFor === 'Designer' && (
                        <FormField
                            type="text"
                            label="Portfolio URL"
                            name="portfolioURL"
                            value={formData.portfolioURL}
                            onChange={handleInputChange}
                            error={errors.portfolioURL}
                            required={formData.applyingFor === 'Designer'}
                        />
                    )}
                    {formData.applyingFor === 'Manager' && (
                        <FormField
                            type="text"
                            label="Management Experience"
                            name="managementExperience"
                            value={formData.managementExperience}
                            onChange={handleInputChange}
                            error={errors.managementExperience}
                            required={formData.applyingFor === 'Manager'}
                        />
                    )}
                    <FormField
                        type="checkbox"
                        label="Additional Skills"
                        name="additionalSkills"
                        options={['JavaScript', 'CSS', 'Python']} // Example skills, adjust as needed
                        value={formData.additionalSkills}
                        onChange={handleInputChange}
                        error={errors.additionalSkills}
                        required
                    />
                    <FormField
                        type="datetime-local"
                        label="Preferred Interview Time"
                        name="preferredInterviewTime"
                        value={formData.preferredInterviewTime}
                        onChange={handleInputChange}
                        error={errors.preferredInterviewTime}
                        required
                    />
                    <SubmitButton />
                </form>
            )}
        </div>
    );
};

export default Form;