import './App.css';
import Router from './Router';
import { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from "./components/Preloader";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { fetchCovids, fetchTimeStamp } from "./redux/actions/covidActions"

function App() {
  const [covid, setCovid] = useState(null);
  const [timeSeries, setTimeSeries] = useState(null);

  //FETCH CALL COVID DATA
  const fetchData = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((response) => response.json())
      .then(async (resp) => {
        setCovid(resp);
        // store.dispatch(fetchCovids({coivd: resp}));
      });
  }

  const timeStampFetchData = () => {
    fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
      .then((response) => response.json())
      .then(async (resp) => {
        setTimeSeries(resp);
        // store.dispatch(fetchCovids({timeSeries: resp}));
      });
  }

  useEffect(() => {
    fetchData();
    timeStampFetchData();
  }, [])

  useEffect(() => {
    if (covid !== null && timeSeries !== null) {
      store.dispatch(fetchCovids({ covid: covid, timeSeries: timeSeries }));
    }
  }, [covid, timeSeries])

  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
