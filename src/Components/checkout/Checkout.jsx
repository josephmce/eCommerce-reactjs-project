/*
Smart Component (Container)

Handles:
- useState
- validation
- form submission
- business logic

*/

import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import useCheckoutForm from "../../hooks/useCheckoutForm";

export default function Checkout() {

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isFormValid
  } = useCheckoutForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <FormInput
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />

      <Button
        type="submit"
        disabled={!isFormValid}
        variant={isFormValid ? "primary" : "disabled"}
      >
        {isFormValid ? "Complete Order" : "Please fill out all fields"}
      </Button>

    </form>
  );
}