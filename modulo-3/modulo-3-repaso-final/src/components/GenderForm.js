const GenderForm = ({selectGender, gender}) => {
  const handleChangeGender = (ev) => {
    selectGender(ev.currentTarget.value);
  };

  return (
    <form action="">
      <select id="gender" name="gender" value={gender} onChange={handleChangeGender}>
      <option value=''>Mujeres y hombres</option>
        <option value="female">Mujeres</option>
        <option value="male">Hombres</option>
      </select>
    </form>
  );
};

export default GenderForm;
