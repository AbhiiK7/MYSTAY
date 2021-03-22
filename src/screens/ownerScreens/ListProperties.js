import Header from '../../components/Header'
import OwnerSidebar from '../../components/OwnerSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { properties, deleteProperties } from '../../actions/propertyActions'

const ListProperty = (props) => {
  const dispatch = useDispatch()
  const property = useSelector((store) => store.getProperty)
  const { loading, response, error } = property

  useEffect(() => {
    dispatch(properties())
  }, [])
  // console.log('response : ',response.data);
  useEffect(() => {}, [loading, response, error])

  const onDelete= (p_id) => {
    console.log('PROPERTY ID:-',p_id);
    dispatch(deleteProperties(p_id))
    window.location.reload(true)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <OwnerSidebar />
        </div>
        <div className="col-md-9 " id="main">
          <Header className="mt-5" title="Your Properties" />

          {/* new Cards */}

          <div className="row">
            {response &&
              response.data &&
              response.data.length > 0 &&
              response.data.map((p) => {
                return (
                  <div className="product row">
                    <div className="col-md-3 mt-4 ">
                      <div className="title">Property: {p.p_name}</div>
                      <div className="address">Address: {p.address}</div>
                      <div className="city">City: {p.city}</div>
                      <div className="state">State: {p.state}</div>
                      <div className="state">Description: {p.description}</div>
                      <div className="state">Parking: {!p.parking && `No` || p.parking && `Yes`}</div>
                      <div className="state">AC: {!p.ac && `No` || p.ac && `Yes`}</div>
                      <div className="state">Furnished: {!p.furnished && `No` || p.furnished && `Yes`}</div>
                      <div className="state">Security: {!p.security && `No` || p.security && `Yes`}</div>
                      
                      <div className="availability">{p.availability}</div>
                      <div className="rent">Rent: {p.rent}</div>

                      <button onClick={()=>{
                            onDelete(p._id)}} className="ms-2 btn btn-danger">Delete</button>
                    </div>
                    <div className="col-md-9 mt-3 ">
                      {p.propertyPictures.map((pic) => {
                        return (
                          <img
                            className="col-md-4 img-thumbnail"
                            src={
                              process.env.PUBLIC_URL + '/photos/' + `${pic.img}`
                            }
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
          </div>

          {/* new Cards */}
        </div>
      </div>
    </div>
  )
}

export default ListProperty
