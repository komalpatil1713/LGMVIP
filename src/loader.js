import React, { useState } from "react";
import Loader from "react-loader-spinner";

const App = () => {
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <br></br>

      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinnerLoading}
      />

      <br></br>
      <button onClick={() => setSpinnerLoading(!spinnerLoading)}>Toggle Loader</button>
    </div>
  )
}

export default App;