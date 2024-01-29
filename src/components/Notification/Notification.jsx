import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="colored"
      style={{ transform: 'translateY(60px)' }}
    />
  );
}

export default Notification;
