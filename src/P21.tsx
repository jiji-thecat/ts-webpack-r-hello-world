/**
 * https://www.reacterry.com/portal/challenges/validate-sign-up-form
 *
 * summary
 *  validate sign up form
 *
 *  * first name
 *  * last name
 *  * email
 *  * password
 *  * password confirm
 *
 * solution
 *  each will have checkFunction and inside we check. If all good, set each flag to true and show the error.
 *
 *
 */
import React, { useState, useCallback } from 'react';

const SignUpForm = () => {
  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [showLastNameError, setShowLastNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPassError, setShowPassError] = useState(false);
  const [showPass2Error, setShowPass2Error] = useState(false);

  const checkFirstName = useCallback((e: any) => {
    const { value } = e.currentTarget.elements.firstName;

    const flag = value !== '';
    setShowFirstNameError(!flag);
    return flag;
  }, []);

  const checkLastName = useCallback((e: any) => {
    const { value } = e.currentTarget.elements.lastName;
    const flag = value !== '';
    setShowLastNameError(!flag);
    return flag;
  }, []);

  const checkEmail = useCallback((e: any) => {
    const { value } = e.currentTarget.elements.email;
    const flag = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
    setShowEmailError(!flag);
    return flag;
  }, []);

  const checkPass = useCallback((e: any) => {
    const { value } = e.currentTarget.elements.password;
    const flag = value.length > 7;
    setShowPassError(!flag);
    return flag;
  }, []);

  /**
   * test case
   * 1. pass: "", cPass: "" -> error, error
   * 2. pass: "123", cPass: "" -> , error
   * 3. pass: "123", cPass: "321" -> error
   * 4. pass: "123", cPass: "123" -> OK
   * 5. pass: "", cPass: "123" -> error, error
   */
  const checkPass2 = useCallback((e: any) => {
    const { value: pass } = e.currentTarget.elements.password;
    const { value: confirmPass } = e.currentTarget.elements.confirmPassword;
    const flag = (pass === '' && confirmPass === '') || pass !== confirmPass;
    setShowPass2Error(flag);
    return !flag;
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      const f1 = checkFirstName(e);
      const f2 = checkLastName(e);
      const f3 = checkEmail(e);
      const f4 = checkPass(e);
      const f5 = checkPass2(e);

      if (f1 && f2 && f3 && f4 && f5) {
        console.log('Form submitted successfully');
      }
    },
    [checkEmail, checkFirstName, checkLastName, checkPass, checkPass2]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input data-testid="first-name-id" type="text" name="firstName" placeholder="First Name" />
        {showFirstNameError && (
          <p data-testid="first-name-error-id" className="error">
            First name cannot be empty
          </p>
        )}
        <input data-testid="last-name-id" type="text" name="lastName" placeholder="Last Name" />
        {showLastNameError && (
          <p data-testid="last-name-error-id" className="error">
            Last name cannot be empty
          </p>
        )}
        <input data-testid="email-id" type="email" name="email" placeholder="Email Address" />
        {showEmailError && (
          <p data-testid="email-error-id" className="error">
            Invalid email address
          </p>
        )}
        <input data-testid="password-id" type="password" name="password" placeholder="Password" />
        {showPassError && (
          <p data-testid="password-error-id" className="error">
            Password must be greater than 7 characters
          </p>
        )}
        <input
          data-testid="confirm-password-id"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        {showPass2Error && (
          <p data-testid="confirm-password-error-id" className="error">
            Passwords do not match
          </p>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
