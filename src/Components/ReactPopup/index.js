import Popup from "reactjs-popup";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";

import "./index.css";

const ReactPopUp = () => (
  <div className="popup-container mt-3">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Currency codes
        </button>
      }
    >
      {(close) => (
        <>
          <a
            href="https://www.iban.com/currency-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <button className="btn btn-outline-primary btn-lg">
                Click here for currency codes
              </button>
            </div>
          </a>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
);
export default ReactPopUp;
