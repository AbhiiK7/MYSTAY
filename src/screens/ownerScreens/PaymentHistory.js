import Header from '../../components/Header'
import OwnerSidebar from '../../components/OwnerSidebar'

const PaymentHistory = (props) => {
  return (
    <div>
      <div>
        <div className="row">
          <OwnerSidebar />
          <div className="col-m-8 " id="main">
            <Header title="Payment History" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory
