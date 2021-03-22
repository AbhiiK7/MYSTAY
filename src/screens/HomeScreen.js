import Header from '../components/Header'
import apt from '../img/apt.svg'
import building from '../img/building.jpg'
import room from '../img/room.jpg'
import resort from '../img/resort.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getApprovedProperty, searchProperties } from '../actions/propertyActions'

const HomeScreen = (props) => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  
  const searchCity = useSelector((store) => store.searchCity)
  const { loading, response, error } = searchCity

  
  
  const onSearch = () => {
    dispatch(searchProperties(query))
  }

  const onBook = () => {
    props.history.push('/signin')
  }
  return (
    <div>
      <Header title="" />

      {/* search bar */}
      <div className="nb-search-form text-center mt-5">
        <div id="nb-search-form-container">
          <div className="nb-search">
            <div
              className="form-inline form-group localitySearch"
              id="homePageLocalitySearch"
            >
              <input
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                type="text"
                required=""
                className="form-control input-home-search"
                placeholder="Search City name"
                // onchange="try{setCustomValidity(&#39;&#39;)}catch(e){}"
              />
              <div
                id="homepageSuggestions"
                className="homepage-suggestions"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div className="form-inline form-group">
              <button
                onClick={onSearch}
                className="btn home-search-button"
                id="searchButtonHomePage"
              >
                <i className="icon-search"></i>
                <span>Search</span>
              </button>
            </div>
          </div>
          <div
            className="recentSearch hide"
            style={{ position: 'absolute', left: '482.203px' }}
          ></div>
        </div>
      </div>

      {/* search bar */}

      {/* Property Owner? */}
      <div className="nb-whatsapp" align="center">
        <div id="orSeperatorHP">
          <div className="seperator" align="center">
            Are you a Property Owner?
          </div>
        </div>
        <div className="pypButton" align="center">
          <div
            className="pypBut"
            itemscope=""
            itemtype="http://schema.org/SiteNavigationElement"
          >
            <button
              className="btn home-search-button"
              style={{ backgroundColor: 'lightblue' }}
            >
              <Link to="/reg">
                <span itemprop="name">Register Here</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* Property Owner? */}

      <div className="row">
        <div className="col-md-12">
          <img src={apt} className="aptimg mt-5 mx-auto d-block"></img>
        </div>
      </div>

      <div className="row">
        {response &&
          response.data &&
          response.data.length > 0 &&
          response.data.map((p) => {
            return (
              <div className="product col-md-3 ms-5 mt-4 mx-auto">
                <div class="thumbnail">
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
                      onClick={onBook}
                      className="btn btn-sm btn-success btn-add-to-cart"
                    >
                      Book Appointment
                    </button>
                  )}
                </div>
              </div>
            )
          })}
      </div>

      <div
        className="row mt-5 bg-dark "
        style={{ color: '#E8E8E8', right: '0', left: '0' }}
      >
        <div
          className="mt-4 col-md-6 ms-5"
          // style={{ color: "#fff" }}
        >
          <div className="fs-3 row text-center mx-auto">About Us</div>
          <p className="mt-3">
            <b>MY</b>STAY is a new home rental platform that makes it easier to
            find your new home without paying any brokerage. Use our verified
            listing to ensure you find your dream home by contacting the owners
            directly. In case you cannot find a property you are looking for,
            please post a requirement and we'll send you email notification with
            properties matching your requirements.
          </p>
        </div>
        <div className="col-md-5" style={{ color: '#fff' }}>
          <div className="fs-3 row justify-content-end">Follow Us</div>
          <div className="row justify-content-end">
            <a href="#" className="fa fa-facebook"></a>
          </div>
          <div className="row justify-content-end">
            <a href="#" className="fa fa-twitter"></a>
          </div>
          <div className="row justify-content-end">
            <a href="#" className="fa fa-instagram"></a>
          </div>
        </div>
      </div>

      <footer style={{ bottom: '0', right: '0', left: '0' }}>
        <p className="center">
          Copyright &copy;
          <span className="primary">Online Accomodation System</span> 2017. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default HomeScreen
