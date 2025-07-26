export const NotificationTypes = Object.freeze({
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    SUCCESS: 'success',
    LOADING: 'loading',
});
export type NotificationTypeType =
    (typeof NotificationTypes)[keyof typeof NotificationTypes];

export type NotificationType = {
    id: string;
    message: string;
    type: NotificationTypeType;
    timeout: number;
};
