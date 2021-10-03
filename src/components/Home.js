import Base from "./Base";
import MedicineCard from "./MedicineCard";
import { useCart, useMedicine } from "./helper/store";
import "./../assets/css/home.css"
import { useEffect, useState } from "react";

const Home = () => {
  const { innerWidth: width } = window;

  const { medicineState, medicineDispatch } = useMedicine();
  const { cartState } = useCart();

  const [alertMsg, setAlertMsg] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(width > 1000);

  const alertClass = "alert alert-dismissible fade show alert-" + (alertMsg?.type ? alertMsg.type : "info");

  useEffect(() => {
    setAlertMsg(medicineState.res);
  }, [medicineState]);

  useEffect(() => {
    if (featureOpen) {
      if (width < 1000) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [featureOpen]);

  const loadStorage = () => {
    medicineDispatch({ type: 'loadLocalStorage' });
  }

  return (
    <>
      <Base largeScreen={width >= 1000}>
        {
          width < 1000 &&
          < div className="feature-open" onClick={() => setFeatureOpen((prevState) => !prevState)}>
            {featureOpen
              ? <i className="fas fa-chevron-circle-right"></i>
              : <i className="fas fa-chevron-circle-left"></i>
            }
          </div>
        }
        <div className="content">
          <div className="container">
            <div className="medicine-data-label">
              Showing {medicineState.data.length} results for <strong>{medicineState.term ? medicineState.term : "all medicines"}</strong>
            </div>
            <div className="row">
              <div className="col-lg-8 col col-sm">
                {
                  medicineState.data &&
                  medicineState.data.map((element, index) => {
                    return (
                      <div key={index} className="card medicine-card">
                        <MedicineCard element={element} />
                      </div>
                    )
                  })
                }
              </div>
              <div className={featureOpen ? "side-card-open col-lg-4 side-card-parent" : "col-lg-4 side-card-parent"}>
                {featureOpen &&
                  <div className="card side-card">
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
                    <div className="d-flex mx-4 mx-md-3 mx-lg-4 mx-xl-5 flex-column justify-content-center align-items-center">
                      <p>Populate LocalStorage with medicine Data</p>
                      <button className="btn btn-warning" onClick={() => loadStorage()}>Upload Data</button>
                    </div>
                    <br />
                    <hr className="custom-rule" />
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
