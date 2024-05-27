import { UnknownAction, ThunkDispatch, configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import globalParams from './globalParamsSlice'
import warehouses from './warehouses/slice'
import stock from './stock/slice'
import resource from './resource/slice'
import workShift from './workShift/slice'
import productionShedule from './productionShedule/slice'
import unloadShedule from './unloadShedule/slice'
import loadShedule from './loadShedule/slice'
import loadDuratuin from './loadDuratuin/slice'
import loadKPI from './loadKPI/slice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  globalParams, 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    persisted: persistedReducer,
    warehouses,
    stock,
    resource,
    workShift,
    productionShedule,
    unloadShedule,
    loadShedule,
    loadDuratuin,
    loadKPI,
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<RootState, any, UnknownAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector