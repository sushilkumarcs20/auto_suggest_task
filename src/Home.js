import Base from "./core/Base";
import MedicineCard from "./core/MedicineCard";
import { useCart, useMedicine } from "./core/helper/store";
import "./assets/css/home.css"
import { checkItemInCart } from "./core/helper/cartHelper";
import { useEffect, useState } from "react";

const Home = () => {
  const { medicineState, medicineDispatch } = useMedicine();
  const { cartState } = useCart();
  const [alertMsg, setAlertMsg] = useState(false);

  useEffect(() => {
    setAlertMsg(medicineState.msg);
  }, [medicineState]);
  
  const loadStorage = () => {
    medicineDispatch({ type: 'loadLocalStorage' });
  }
  return (
    <>
      <Base>
        <div className="content">
          <div className="container">
            <div className="medicineDataLabel">
              Showing {medicineState.data.length} results for <strong>{medicineState.term ? medicineState.term : "all medicines"}</strong>
            </div>
            <div className="row">
              <div className="col-8">
                {
                  medicineState.data &&
                  medicineState.data.map((element, index) => {
                    return (
                      <div key={index} className="card medicineCard">
                        <MedicineCard element={element} addedInCart={checkItemInCart(element)}></MedicineCard>
                      </div>
                    )
                  })
                }
              </div>
              <div className="col-4">
                <div className="card sideCard">
                  {
                    alertMsg &&
                    <>
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {medicineState.msg}
                        <button onClick={() => setAlertMsg(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                    </>
                  }
                  <h5><em>Some Extra Functionality here</em></h5>
                  <br />
                  <div className="d-flex mx-5 flex-column justify-content-center align-items-center">
                    <p>Populate LocalStorage with medicine Data</p>
                    <button className="btn btn-warning" onClick={() => loadStorage()}>Upload Data</button>
                  </div>
                  <br />
                  <hr className="customHRule" />
                  <div className="container text-center">
                    <h2>Total Price: ₹ {cartState.amount}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </>
  );
}

export default Home;
