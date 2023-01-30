import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import TextField from "./../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../app/UserSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const curUser = users.filter((user) => user.id === parseInt(params.id));
  const { name, email } = curUser[0];
  const [values, setValues] = useState({ name, email });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: parseInt(params.id),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values?.name}
        inputProps={{ type: "text", placeholder: "John Done" }}
      />
      <br />
      <TextField
        label="Email"
        value={values?.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "jonedone@gmail.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
