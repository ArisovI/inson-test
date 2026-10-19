import { InsurancePage } from "@/pages/insurance-page";
import { NotificationProvider, RouterProvider, StoreProvider } from "./providers";
import "./styles/index.scss";

export const App = () => {
  return (
    <RouterProvider>
      <StoreProvider>
        <NotificationProvider>
          <InsurancePage />
        </NotificationProvider>
      </StoreProvider>
    </RouterProvider>
  );
};
