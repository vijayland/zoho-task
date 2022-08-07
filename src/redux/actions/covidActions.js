export const FETCH_COVID_SUCCESS = "FETCH_COVID_SUCCESS";
export const FETCH_TIMESTAMP_SUCCESS = "FETCH_COVID_SUCCESS";

// fetch covid vaccine data
export const fetchCovids=(data)=> {
  return { type: FETCH_COVID_SUCCESS, payload: data };
}

// fetch covid vaccine data
export const fetchTimeStamp=(data)=> {
  return { type: FETCH_TIMESTAMP_SUCCESS, payload: data };
}

// export default fetchCovids;
