import "./index.scss";
function Form({ isOpen = false, setIsOpen }) {
  return (
    <div className={`form`}>
      <div id="card" className={`card  ${isOpen && "active"}`}>
        <div className="content">
          <div className="inputbox">
            <input required type="text" />
            <span>Date</span>
            <i />
          </div>
          <div className="inputbox">
            <input required type="text" />
            <span>Time</span>
            <i />
          </div>
          <div className="inputbox">
            <input required type="text" />
            <span>Purpose</span>
            <i />
          </div>
          <div className="inputbox">
            <input required type="text" />
            <span>Status</span>
            <i />
          </div>
          <div className="submit">
            <div className="btn1">
              <button>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
            <div className="btn2">
              <button
                id="noselect"
                className="noselect"
                onClick={() => setIsOpen(false)}
              >
                <span className="text">Exit</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
