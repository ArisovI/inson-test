import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notificationSlice } from "@/shared/model/notification";
import { formSlice, loadForm, saveForm } from "@/features/policy-form";

const rootReducer = combineReducers({
  [formSlice.name]: formSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: { [formSlice.name]: loadForm() },
});

store.subscribe(() => saveForm(store.getState().policyForm));

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type AppDispatch = typeof store.dispatch;
}
