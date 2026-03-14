import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function Shop() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  const amount = useSelector((state) => state.amount);

  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
      {/* <button
        className="btn btn-primary me-2"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary ms-2"
        onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button> */}
      <button
        className="btn btn-primary me-2"
        disabled={amount < 1}
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary ms-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
