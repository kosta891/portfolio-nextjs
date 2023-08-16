const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h1>Successfuly sent message</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default EmailTemplate;
