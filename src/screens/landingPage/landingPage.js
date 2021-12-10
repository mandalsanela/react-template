import react from "react";
import InputField from "../../components/inputField/inputField";

const LandingPage = (props) => {
  return (
    <div>
      <InputField value={props.name} label={props.label} setValue={props.setName} />
      <InputField value={props.lastName} label={props.label1} setValue={props.setLastName} />
    </div>
  );
};

export default LandingPage;
