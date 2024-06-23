import { useState } from 'react';

const useValidation = () => {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        let valid = true;
        const newErrors = {};

        // Validation rules
        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required';
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone Number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone Number is invalid';
            valid = false;
        }

        if (!formData.applyingFor) {
            newErrors.applyingFor = 'Applying For is required';
            valid = false;
        }

        if ((formData.applyingFor === 'Developer' || formData.applyingFor === 'Designer') && !formData.relevantExperience) {
            newErrors.relevantExperience = 'Relevant Experience is required';
            valid = false;
        }

        if (formData.applyingFor === 'Designer' && !formData.portfolioURL) {
            newErrors.portfolioURL = 'Portfolio URL is required';
            valid = false;
        }

        if (formData.applyingFor === 'Manager' && !formData.managementExperience) {
            newErrors.managementExperience = 'Management Experience is required';
            valid = false;
        }

        if (formData.additionalSkills.length === 0) {
            newErrors.additionalSkills = 'At least one skill must be selected';
            valid = false;
        }

        if (!formData.preferredInterviewTime) {
            newErrors.preferredInterviewTime = 'Preferred Interview Time is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return { errors, validateForm };
};

export default useValidation;