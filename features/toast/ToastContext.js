import * as React from 'react';
import { ClientOnlyPortal } from '@/components/portal/ClientOnlyPortal';
import { Toast } from '@/features/toast/Toast';

const ToastContext = React.createContext();

const initialState = [];

export const SHOW_TOAST = 'SHOW_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

const toastReducer = (state, action) => {
  if (action.type === SHOW_TOAST) {
    const { title, subtitle, variant } = action.payload;
    return [...state, { id: +new Date(), title, subtitle, variant }];
  }

  if (action.type === REMOVE_TOAST) {
    return state.filter((item) => item.id !== action.payload.id);
  }

  return state;
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(toastReducer, initialState);

  const showToast = React.useCallback((toast) => dispatch({ type: SHOW_TOAST, payload: toast }), [dispatch]);

  const removeToast = React.useCallback((id) => dispatch({ type: REMOVE_TOAST, payload: { id } }), [dispatch]);

  const value = React.useMemo(() => ({ state, showToast, removeToast }), [showToast, state, removeToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ClientOnlyPortal selector="#toast">
        <Toast />
      </ClientOnlyPortal>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = React.useContext(ToastContext);

  if (context === undefined) {
    throw new Error(`useToast must be used within a ToastProvider`);
  }

  return context;
};

export { ToastProvider, useToast };
