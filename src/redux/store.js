import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
