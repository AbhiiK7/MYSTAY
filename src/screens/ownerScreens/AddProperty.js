import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProperty } from '../../actions/propertyActions'
import Header from '../../components/Header'
import OwnerSidebar from '../../components/OwnerSidebar'

const AddProperty = (props) => {
  const [p_name, setPName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [address, setAddress] = useState('')
  const [rent, setRent] = useState('')
  const [parking, setParking] = useState('')
  const [description, setDescription] = useState('')
  const [ac, setAC] = useState('')
  const [furnished, setFurnished] = useState('')
  const [security, setSecurity] = useState('')
  const dispatch = useDispatch()

  const addPropertyStore = useSelector((store) => store.addNewProperty)
  const { loading, response, error } = addPropertyStore

  useEffect(() => {
    if (response && response.status == 'success') {
      props.history.push('/properties')
      window.location.reload(true)
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(
      addProperty(
        p_name,
        city,
        state,
        address,
        rent,
        description,
        parking,
        ac,
        furnished,
        security
      )
    )
  }

  const onCancel = () => {
    props.history.push('/home')
  }

  return (
    <div className="row">
      <OwnerSidebar />
      <div className="col-md-10 " id="main">
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-8">
                  <div className="card-block">
                    <h2 className="m-b-20 p-b-5 b-b-default f-w-600">
                      <Header title="Add Property" />
                      New Property Information
                    </h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">Property Name</h5>
                        <input
                          onChange={(e) => {
                            setPName(e.target.value)
                          }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '7px 5%',
                            borderRadius: '25px',
                            width: '80%',
                          }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">Rent per month</h5>
                        <input
                          onChange={(e) => {
                            setRent(e.target.value)
                          }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '7px 5%',
                            borderRadius: '25px',
                            width: '80%',
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div>
                        <h5 className="m-b-10 f-w-600">Address</h5>
                        <input
                          onChange={(e) => {
                            setAddress(e.target.value)
                          }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '7px 2%',
                            borderRadius: '25px',
                            width: '90%',
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">City</h5>

                        <input
                          onChange={(e) => {
                            setCity(e.target.value)
                          }}
                          type="text"
                          className="input signup-form group"
                          style={{
                            padding: '7px 5%',
                            borderRadius: '25px',
                            width: '80%',
                          }}
                        />
                      </div>
                      <div className="col-sm-6">
                        <h5 className="m-b-10 f-w-600">State</h5>
                        <select
                          onChange={(e) => {
                            setState(e.target.value)
                          }}
                          id="inputState"
                          className="form-select"
                          style={{
                            padding: '7px 5%',
                            borderRadius: '25px',
                            width: '80%',
                            border: '2px solid',
                          }}
                        >
                          <option selected>Choose State</option>
                          <option>Maharashtra</option>
                          <option>Madhya Pradesh</option>
                          <option>Himachal Pradesh</option>
                          <option>Haryana</option>
                          <option>Tamil Nadu</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Gujarat</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div>
                        <h5 className="m-b-10 f-w-600">Description</h5>
                        <textarea
                          onChange={(e) => {
                            setDescription(e.target.value)
                          }}
                          type="textarea"
                          className="input signup-form group"
                          style={{
                            padding: '7px 2%',
                            borderRadius: '25px',
                            width: '90%',
                            border: '2px solid',
                          }}
                        />
                      </div>
                    </div>

                    <h3 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Facilities
                    </h3>

                    <div className="row">
                      <div className="col-sm-3">
                        <label className="m-b-10 f-w-600">Parking</label>
                        <input
                          onChange={(e) => {
                            setParking(e.target.checked)
                          }}
                          type="checkbox"
                          className="ms-3"
                          name="parking"
                        />
                      </div>
                      <div className="col-sm-3">
                        <label className="m-b-10 f-w-600">AC</label>
                        <input
                          onChange={(e) => {
                            setAC(e.target.checked)
                          }}
                          type="checkbox"
                          className="ms-3"
                          name="ac"
                        />
                      </div>
                      <div className="col-sm-3">
                        <label className="m-b-10 f-w-600">Furnished</label>
                        <input
                          onChange={(e) => {
                            setFurnished(e.target.checked)
                          }}
                          type="checkbox"
                          className="ms-3"
                          name="furnished"
                        />
                      </div>
                      <div className="col-sm-3">
                        <label className="m-b-10 f-w-600">Security</label>
                        <input
                          onChange={(e) => {
                            setSecurity(e.target.checked)
                          }}
                          type="checkbox"
                          className="ms-3"
                          name="security"
                        />
                      </div>
                    </div>

                    <h2 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <button onClick={onAdd} className="btn btn-primary ">
                          Save
                        </button>
                        <button
                          onClick={onCancel}
                          className="btn btn-danger ms-3"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
