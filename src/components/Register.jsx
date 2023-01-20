const Register = (props) => {
  return (
    <>
      <div className="form-description">Create user account for using our service. Create user account for using our service</div>
      <div className="form-input">
        <div className="input-wrapper">
          <div className="label">Your e-mail</div>
          <div className="input-field"><input type="text" /></div>
        </div>
        <div className="input-wrapper">
          <div className="label">Password</div>
          <div className="input-field"><input type="password" /></div>
        </div>
        <div className="input-wrapper">
          <div className="label">Repeat pass</div>
          <div className="input-field"><input type="password" /></div>
        </div>
      </div>
      <div className="form-button">
        <a href="/">Forget password</a>
        <button className="buttonForm">
          <div className="buttonTitle">Create account</div>
        </button>
      </div>
    </>
  );
};

export default Register;
