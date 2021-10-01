import Base from "./core/Base";
import MedicineCard from "./core/MedicineCard";
import { useCart, useMedicine } from "./core/helper/store";
import "./assets/css/home.css"
import { checkItemInCart } from "./core/helper/cartHelper";

const Home = () => {
  const { medicineState } = useMedicine();
  const { cartState } = useCart();
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
                  <em>Some Extra Functionality here</em>
                  <br />
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
