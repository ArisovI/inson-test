import type { ReactNode } from "react";
import { useTimeout } from "@/shared/lib/use-timeout";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import {
  hide,
  selectNotifications,
  type NotificationItem,
} from "@/shared/model/notification";
import { Notification, NotificationStack } from "@/shared/ui/notification";

interface Props {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
  const items = useAppSelector(selectNotifications);

  return (
    <>
      {children}
      {items.length > 0 && (
        <NotificationStack>
          {items.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </NotificationStack>
      )}
    </>
  );
};

const Item = ({ id, variant, title, message }: NotificationItem) => {
  const dispatch = useAppDispatch();

  useTimeout(() => dispatch(hide(id)), 3000);

  return (
    <Notification
      variant={variant}
      title={title}
      onClick={() => dispatch(hide(id))}
    >
      {message}
    </Notification>
  );
};
