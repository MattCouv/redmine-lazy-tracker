const Toggle = ({ toggle }) => {
  let checked = "";
  if (toggle) {
    checked = "checked";
  }
  return (
    <div>
      <input
        type="checkbox"
        id="unchecked"
        className="cbx hidden"
        {...checked}
      />
      <label for="unchecked" className="lbl" />
    </div>
  );
};

export default Toggle;
