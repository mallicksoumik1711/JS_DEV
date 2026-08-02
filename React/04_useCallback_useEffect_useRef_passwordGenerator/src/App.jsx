import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [lengthOfPass, setLengthOfPass] = useState(1);
  const [numPass, setNumPass] = useState(false);
  const [charPass, setCharPass] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let password = "";
    let passwordContainer =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numPass) {
      passwordContainer += "0123456789";
    }
    if (charPass) {
      passwordContainer += "!@#$%^&*?/";
    }

    for (let i = 1; i <= lengthOfPass; i++) {
      password +=
        passwordContainer[
          Math.floor(Math.random() * passwordContainer.length)
        ];
    }

    setPassword(password);
  }, [lengthOfPass, numPass, charPass]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [lengthOfPass, charPass, numPass, generatePassword]);

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center mt-10 h-content p-2">
        <h1 className="text-4xl mb-5">Password generator</h1>
        <div>
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="text-black bg-white outline-none px-4 py-3"
            placeholder="your password"
          />
          <button onClick={handleCopy} className="bg-blue-500 px-4 py-3 cursor-pointer">Copy</button>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              type="range"
              min={1}
              max={10}
              value={lengthOfPass}
              onChange={(e) => {
                setLengthOfPass(e.target.value);
              }}
            />
            <label>{lengthOfPass}</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              onChange={() => {
                setNumPass((prev) => {
                  return !prev;
                });
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" onChange={() => {
              setCharPass( (prev) => {
                return !prev
              } )
            }} />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
