import React from 'react'
import AddAddress from '../Address/AddAddress'
import AccountSecurity from '../Admin/AccountSecurity'
import Navbar from '../Navbar/Navbar'
import Account from './Account'

const UserDashboard = () => {
  return (
    <div>
<Navbar/>
<div className="d-flex align-items-start container mt-5">
  <div
    className="nav flex-column nav-pills me-3 border w-25 rounded overflow-hidden px-3 py-2 bg-dark"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
  >
    <button
      className="nav-link text-white fw-bold"
      id="v-pills-disabled-tab"
      data-bs-toggle="pill"
      data-bs-target="#v-pills-disabled"
      type="button"
      role="tab"
      aria-controls="v-pills-disabled"
      aria-selected="false"
      disabled=""
    >
      Account
    </button>
    <button
      className="nav-link tap_button active color"
      id="v-pills-home-tab"
      data-bs-toggle="pill"
      data-bs-target="#accountDetails"
      type="button"
      role="tab"
      aria-controls="v-pills-home"
      aria-selected="true"
    >
      Account Details
    </button>
    <button
      className="nav-link tap_button tap_hover"
      id="v-pills-profile-tab"
      data-bs-toggle="pill"
      data-bs-target="#accountSecurity"
      type="button"
      role="tab"
      aria-controls="v-pills-profile"
      aria-selected="false"
    >
      Account Security
    </button>
    <button
      className="nav-link tap_button tap_hover"
      id="v-pills-profile-tab"
      data-bs-toggle="pill"
      data-bs-target="#waiting"
      type="button"
      role="tab"
      aria-controls="v-pills-profile"
      aria-selected="false"
    >
     Orders
    </button>
    <button
      className="nav-link tap_button tap_hover"
      id="v-pills-settings-tab"
      data-bs-toggle="pill"
      data-bs-target="#products"
      type="button"
      role="tab"
      aria-controls="v-pills-settings"
      aria-selected="false"
    >
      Address 
    </button>
    <button
      className="nav-link tap_button tap_hover"
      id="v-pills-settings-tab"
      data-bs-toggle="pill"
      data-bs-target="#categories"
      type="button"
      role="tab"
      aria-controls="v-pills-settings"
      aria-selected="false"
    >
      WishList
    </button>
    <button
      className="nav-link tap_button tap_hover"
      id="v-pills-settings-tab"
      data-bs-toggle="pill"
      data-bs-target="#review"
      type="button"
      role="tab"
      aria-controls="v-pills-settings"
      aria-selected="false"
    >
      Reviews
    </button>

  </div>

<div className="tab-content w-75 mb-4 ps-3" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="accountDetails" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
      <Account/>
      </div>
      <div class="tab-pane fade" id="accountSecurity" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
      <AccountSecurity/>
      </div>
      
<div
  className="tab-pane fade"
  id="products"
  role="tabpanel"
  aria-labelledby="v-pills-settings-tab"
  tabIndex={0}
>
  {/* div1 */}
  <AddAddress/>
  
</div>

<div
  className="tab-pane fade"
  id="waiting"
  role="tabpanel"
  aria-labelledby="v-pills-settings-tab"
  tabIndex={0}
>

</div>
<div
  className="tab-pane fade"
  id="categories"
  role="tabpanel"
  aria-labelledby="v-pills-settings-tab"
  tabIndex={0}
>
  {/* mainCategoryPage */}
  <div id="mainCategoryPage">
   
  </div>
  {/* edit category */}
  {/* add category */}

</div>

<div
  className="tab-pane fade"
  id="merchants"
  role="tabpanel"
  aria-labelledby="v-pills-settings-tab"
  tabIndex={0}
>
  <div className="">
    <h4>Merchants</h4>
    <hr />
    
  </div>
</div>
  {/*-------------------------------------------------users-------------------------------------------------------*/}
  <div
    className="tab-pane fade"
    id="users"
    role="tabpanel"
    aria-labelledby="v-pills-settings-tab"
    tabIndex={0}
  >
    <div className="">
      <h4>Users</h4>
      <hr />
     
    </div>
  </div>

  {/*-------------------------------------------------Brands-------------------------------------------------------*/}

  <div
    className="tab-pane fade"
    id="brands"
    role="tabpanel"
    aria-labelledby="v-pills-settings-tab"
    tabIndex={0}
  >
    <div className="">
      <h4>Brands</h4>
      <hr />
     
    </div>
  </div>


</div>
</div>
</div>
  )
}

export default UserDashboard