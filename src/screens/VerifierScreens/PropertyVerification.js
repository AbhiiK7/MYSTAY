import VerifierSidebar from '../../components/VerifierSidebar'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { pendingProperties } from '../../actions/verifierActions'

const PropertyVerification = (props) => {
  const dispatch = useDispatch()
  const property = useSelector((store) => store.getProperty)
  const { loading, response, error } = property

  useEffect(() => {
    dispatch(pendingProperties())
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])

  const onSchedule = (p_id,p_name,o_name) => {
    
    sessionStorage.setItem('p_id', p_id)
    sessionStorage.setItem('p_name', p_name)
    sessionStorage.setItem('o_name', o_name)
  
    props.history.push('/schedule')
    // console.log('p_id: ', p_id)
    // console.log('p_name: ', p_name)
    // console.log('o_name: ', o_name)
  
    // props.history.push({pathname:`/schedule/${p_id}`})



    // console.log('A Td Element was clicked!')
    // console.log('it produced this event:')
    // console.log('It was in this column:', column)
    // console.log('It was in this row:', rowInfo)
    // console.log('It was in this table instance:', instance)
  }

  return (
    <div>
      <div>
        <div className="row">
          <VerifierSidebar />
          <div className="col-md-10 " id="main">
            <Header title="New Properties" />
            <table className="col-m-8 table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Property Name</th>
                  <th>Owner Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {response &&
                  response.val.data &&
                  response.val.data.length > 0 &&
                  response.val.data.map((p) => {
                    return (
                      <tr>
                        <td>{p._id}</td>
                        <td>{p.p_name}</td>
                        <td>{p.owner.firstName + ' ' + p.owner.lastName}</td>
                        <td>{p.address}</td>
                        <td>{p.city}</td>
                        <td>{p.state}</td>
                        <td>
                          <button
                            
                            onClick={()=>{
                              onSchedule(p._id,p.p_name,`${p.owner.firstName + ' ' + p.owner.lastName}`)}}
                            className="btn btn-primary"
                          >
                            Schedule Appointment
                          </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyVerification
