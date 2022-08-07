import './App.css';
import Router from './Router';
import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from "./components/Preloader";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { fetchCovids, fetchTimeStamp } from "./redux/actions/covidActions"

function App() {
  //FETCH CALL COVID DATA
  const fetchData = () => {
    fetch('https://data.covid19india.org/v4/min/data.min.json')
      .then((response) => response.json())
      .then(async (resp) => {
        store.dispatch(fetchCovids(resp));
        // loopPromise(resp).then(respo => {
        //   store.dispatch(fetchCovids(respo));
        // })
      });
  }

  const timeStampFetchData = () => {
    fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
      .then((response) => response.json())
      .then(async (resp) => {
        store.dispatch(fetchTimeStamp(resp));
      });
  }

  useEffect(() => {
    fetchData();
    timeStampFetchData();
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={<Preloader />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
