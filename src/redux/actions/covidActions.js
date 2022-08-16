export const FETCH_COVID_SUCCESS = "FETCH_COVID_SUCCESS";

// fetch covid vaccine data
export const fetchCovids=(data)=> {
  return { type: FETCH_COVID_SUCCESS, payload: data };
}

