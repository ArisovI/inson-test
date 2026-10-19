import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface Notification {
  variant: "success" | "error";
  title?: string;
  message: string;
}

export interface NotificationItem extends Notification {
  id: string;
}

const initialState: NotificationItem[] = [];

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notify: {
      reducer: (state, action: PayloadAction<NotificationItem>) =>
        [...state, action.payload].slice(-3),
      prepare: (item: Notification) => ({
        payload: { ...item, id: nanoid() },
      }),
    },
    hide: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { notify, hide } = notificationSlice.actions;

export const selectNotifications = (state: RootState) => state.notification;
