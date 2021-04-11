import React, { useEffect } from "react";
import "./App.css";
import jsonp from "jsonp";
import useVaccineData from "./data/useVaccineData";

function App() {
  const { data } = useVaccineData();

  useEffect(() => {
    jsonp(
      "https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",
      (error, data) => {}
    );
  }, []);

  return (
    <div >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
