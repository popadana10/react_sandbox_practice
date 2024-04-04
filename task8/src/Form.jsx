const Form = ({ handleChange }) => {
  return (
    <form onChange={(e) => handleChange(e)}>
      <fieldset id="details">
        <legend>Your details</legend>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="defaultOption" disabled>
              Select your option
            </option>

            <option value="student" defaultValue>
              student
            </option>
            <option value="teacher">teacher</option>
            <option value="other">other</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
