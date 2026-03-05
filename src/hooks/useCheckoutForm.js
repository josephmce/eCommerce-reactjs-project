import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

/**
 * Custom React hook for managing checkout form state and validation.
 * 
 * Provides form state management, input change handling, and form validation
 * for a checkout form with name, email, and address fields.
 * 
 * @returns {Object} An object containing:
 *   @returns {Object} formData - The current form data with name, email, and address fields
 *   @returns {Object} errors - Object containing validation error messages for each field
 *   @returns {Function} handleChange - Event handler for input field changes
 *   @returns {Function} handleSubmit - Event handler for form submission with validation
 *   @returns {boolean} isFormValid - Boolean indicating if all form fields are valid
 * 
 * @example
 * const { formData, errors, handleChange, handleSubmit, isFormValid } = useCheckoutForm();
 */
export default function useCheckoutForm() {
    // Get dispatch function from Redux store to allow dispatching actions
    const dispatch = useDispatch();
    // Initialize form data state with empty string values for name, email, and address
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    // Initialize errors state as an empty object to store validation error messages
    const [errors, setErrors] = useState({});

    // Regular expression pattern for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Event handler for input field changes that updates the corresponding form field
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update formData with the new value for the changed field
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Check if name field has at least one non-whitespace character
    const isNameValid = formData.name.trim().length > 0;
    // Check if email field matches the email regex pattern
    const isEmailValid = emailRegex.test(formData.email);
    // Check if address field has at least one non-whitespace character
    const isAddressValid = formData.address.trim().length > 0;

    // Determine if the entire form is valid by checking all field validations
    const isFormValid = isNameValid && isEmailValid && isAddressValid;

    // Event handler for form submission that validates all fields
    const handleSubmit = (e) => {
        // Prevent default form submission behavior
        e.preventDefault();

        // Initialize an object to store validation errors
        const newErrors = {};

        // Validate name field and add error message if empty
        //.trim() removes whitespace from both ends of the string, so it checks if the name is not just spaces
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Validate email field for empty value or invalid format
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        // Validate address field and add error message if empty
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }

        // Update errors state with validation results
        setErrors(newErrors);

        // If no errors exist, log the form data to console
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
        }
        dispatch(cartActions.clearCart());
    };

    // Return an object containing form state and handler functions
    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        isFormValid
    };
}