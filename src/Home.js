import Base from "./core/Base";
import MedicineCard from "./core/MedicineCard";
import { useCart, useMedicine } from "./core/helper/store";
import "./assets/css/home.css"
import { checkItemInCart } from "./core/helper/cartHelper";
import { useEffect, useState } from "react";

const Home = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const { medicineState, medicineDispatch } = useMedicine();
  const { cartState } = useCart();
  const [alertMsg, setAlertMsg] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(width > 768);
  const alertClass = "alert alert-dismissible fade show alert-" + (alertMsg?.type ? alertMsg.type : "info");

  useEffect(() => {
    setAlertMsg(medicineState.res);
  }, [medicineState]);

  const loadStorage = () => {
    medicineDispatch({ type: 'loadLocalStorage' });
  }
  return (
    <>
      <Base largeScreen={width > 768}>
        {width < 768 &&
          < div className="featureDiv" onClick={() => setFeatureOpen((prevState) => !prevState)}>
            {featureOpen
              ? <i class="fas fa-chevron-circle-right"></i>
              : <i class="fas fa-chevron-circle-left"></i>

            }
          </div>
        }
        <div className="content">
          <div className="container">
            <div className="medicineDataLabel">
              Showing {medicineState.data.length} results for <strong>{medicineState.term ? medicineState.term : "all medicines"}</strong>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm">
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
              <div className="col-lg-4 col-sm">
                {featureOpen &&
                  <div className="card sideCard">
                    {
                      alertMsg &&
                      <>
                        <div className={alertClass} role="alert">
                          {alertMsg.msg}
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
                      <h2>Total Price: ₹ {parseInt(cartState.amount)}</h2>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Base>
    </>
  );
}

export default Home;
