import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AdminSidebar from "../../components/AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { addVerifier } from "../../actions/userActions";

/**
 * @author
 * @function AddVerifier
 **/

const AddVerifier = (props) => {
  
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const addVerifierStore = useSelector((store) => store.addVerifiers)
  const { loading, response, error } = addVerifierStore

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/verifierDetails')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(phone)
    // console.log(password)
     dispatch(addVerifier(firstName,
  lastName,
  email,
  phone,
  password))
  }


  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-8 " id="main">
          <Header title="Add Verfier" />
          <div className="row mt-5">
            <div className="col-md-5">
              <label for="inputName" className="form-label fw-bold">
                First Name
              </label>
              <input onChange={(e) => {
              setFname(e.target.value)
            }} type="text" className="form-control" id="inputName" />
            </div>
            <div className="col-md-5">
              <label for="inputLastName" className="form-label fw-bold">
                Last Name
              </label>
              <input onChange={(e) => {
              setLname(e.target.value)
            }} type="text" className="form-control" id="inputLastName" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label for="inputEmail" className="form-label fw-bold">
                Email
              </label>
              <input onChange={(e) => {
              setEmail(e.target.value)
            }} type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="col-md-5">
              <label for="inputPhone" className="form-label fw-bold">
                Phone
              </label>
              <input onChange={(e) => {
              setPhone(e.target.value)
            }} type="tel" className="form-control" id="inputPhone" />
            </div>
          </div>
          <div className="col-md-5">
            <label for="inputPassword" className="form-label fw-bold">
              Password
            </label>
            <input onChange={(e) => {
              setPassword(e.target.value)
            }}
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>

          <div className="col-12 mt-3 float-right">
            <button onClick={onAdd} type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVerifier
