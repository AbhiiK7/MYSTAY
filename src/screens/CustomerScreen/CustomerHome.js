import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import building from '../../img/building.jpg'
import room from '../../img/room.jpg'
import resort from '../../img/resort.jpg'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getApprovedProperty, searchProperties } from '../../actions/propertyActions'

/**
 * @author
 * @function CustomerHome
 **/

const CustomerHome = (props) => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  
  const searchCity = useSelector((store) => store.searchCity)
  const { loading, response, error } = searchCity

  

  
  
  const onSearch = () => {
    dispatch(searchProperties(query))
  }


  const onSchedule = (p_id, p_name, o_name) => {
    sessionStorage.setItem('p_id', p_id)
    sessionStorage.setItem('p_name', p_name)
    sessionStorage.setItem('o_name', o_name)

    props.history.push('/schedule')
  }
  return (
    <div>
      <div className="row bg-light">
        <Navigation />
        <Header title="" />
        {/* search bar */}
        <div className="nb-search-form text-center mt-5">
          <div id="nb-search-form-container">
            <div className="nb-search">
              
              <div
                className="form-inline form-group localitySearch"
                id="homePageLocalitySearch">
                <input
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                  type="text"
                  required=""
                  className="form-control input-home-search"
                  placeholder="Search localities or landmarks"
                  // onchange="try{setCustomValidity(&#39;&#39;)}catch(e){}"
                />
                <div
                  id="homepageSuggestions"
                  className="homepage-suggestions"
                  style={{ display: 'none' }}></div>
              </div>
              <div className="form-inline form-group">
                <button
                onClick={onSearch}
                  className="btn home-search-button"
                  id="searchButtonHomePage">
                  <i className="icon-search"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div
              className="recentSearch hide"
              style={{ position: 'absolute', left: '482.203px' }}></div>
          </div>
        </div>

        {/* new Cards */}

        <div className="row">
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((p) => {
              return (
                <div className="product col-md-3 ms-5 mt-4 mx-auto">
                  <div className="title">Property: {p.p_name}</div>
                  <div className="address">Address: {p.address}</div>
                  <div className="city">City: {p.city}</div>
                  <div className="state">State: {p.state}</div>
                  <div className="ownerName">
                    Owner: {p.owner.firstName + ' ' + p.owner.lastName}
                  </div>
                  <div className="contact">Contact: {p.owner.phone}</div>
                  <div className="availability">{p.availability}</div>
                  <div className="rent">Rent: {p.rent}</div>
                  {p.availability == 'available' && (
                    <button
                      onClick={() => {
                        onSchedule(
                          p._id,
                          p.p_name,
                          `${p.owner.firstName + ' ' + p.owner.lastName}`
                        )
                      }}
                      className="btn btn-sm btn-success btn-add-to-cart">
                      Book Appointment
                    </button>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default CustomerHome
