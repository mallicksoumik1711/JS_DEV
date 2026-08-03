function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  className = "",
}) {
  return (
    <div
      className={`bg-gray-700 text-white p-3 rounded-lg text-sm flex w-1/2 mx-auto ${className}`}
    >
      <div className="w-1/2">
        <label className=" mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-gray-600 rounded-md px-1 py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className=" mb-2 w-full">Currency Type</p>
        <select
          className="text-black/60 rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => {
            return(
                <option value={currency} key={currency}>{currency}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
