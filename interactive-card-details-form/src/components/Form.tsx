import React from "react";

const Form: React.FC = () => {
  return (
    <div>
      <form className="max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="holder" className="font-bold uppercase text-xs">
            Cardholder Name
          </label>
          <input
            className="input"
            type="text"
            id="holder"
            placeholder="e.g. Jane Appleseed"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="card" className="font-bold uppercase text-xs">
            Card Number
          </label>
          <input
            className="input"
            type="text"
            id="card"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
        </div>
        <div className="flex space-x-4 pb-8">
          <div>
            <label htmlFor="exp" className="font-bold uppercase text-xs">
              Exp. Date (MM/YY)
            </label>
            <div className="flex space-x-2">
              <input
                className="input"
                type="number"
                aria-label="expire-month"
                placeholder="MM"
                min={1}
                max={12}
              />
              <input
                className="input"
                type="number"
                aria-label="expire-year"
                placeholder="YY"
                min={23}
              />
            </div>
          </div>
          <div>
            <label htmlFor="cvc" className="font-bold uppercase text-xs">
            CVC
            </label>
            <input
              className="input"
              type="number"
              minLength={3}
              maxLength={3}
              id="cvc"
              placeholder="e.g. 123"
              required
            />
          </div>
        </div>
        <button className="w-full bg-dark-violet text-white py-4 rounded-md">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
