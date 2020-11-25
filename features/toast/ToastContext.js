import * as React from 'react';
import { ClientOnlyPortal } from '@/components/portal/ClientOnlyPortal';
import { Toast } from '@/features/toast/Toast';

const ToastContext = React.createContext();

const initialState = null;

export const SHOW_TOAST = 'SHOW_TOAST';
export const CLOSE_TOAST = 'CLOSE_TOAST';

const toastReducer = (state, action) => {
  if (action.type === SHOW_TOAST) {
    const { title, subtitle, variant = 'success' } = action.payload;
    return { id: +new Date(), title, subtitle, variant };
  }

  if (action.type === CLOSE_TOAST) {
    return null;
  }

  return state;
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(toastReducer, initialState);

  const showToast = React.useCallback((toast) => dispatch({ type: SHOW_TOAST, payload: toast }), [dispatch]);

  const closeToast = React.useCallback(() => dispatch({ type: CLOSE_TOAST }), [dispatch]);

  const value = React.useMemo(() => ({ showToast }), [showToast]);

  React.useEffect(() => {
    if (state) {
      const id = setTimeout(closeToast, 4000);
      return () => clearTimeout(id);
    }
  }, [state, closeToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ClientOnlyPortal selector="#toast">
        {state ? <Toast key={state.id} toast={state} closeToast={closeToast} /> : null}
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
