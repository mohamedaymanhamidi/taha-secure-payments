import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { useState } from "react";

type Props = {
  name: string;
  label: string;
  link: string;
  className: string;
};

const PaymentCard = ({ name, label, link, className }: Props) => {
  const [showQR, setShowQR] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
    setToast("Link copied");
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <>
      <motion.div
        className={`card ${className}`}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glow" />

        <h2>{name}</h2>
        <p className="label">{label}</p>

        <div className="actions">
          <a href={link} target="_blank" rel="noreferrer noopener">
            Pay Now
          </a>

          <button onClick={copyLink}>Copy</button>

          <button onClick={() => setShowQR(true)}>QR</button>
        </div>
      </motion.div>

      {/* QR MODAL */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Scan to Pay</h3>
              <QRCode value={link} size={160} />
              <button onClick={() => setShowQR(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PaymentCard;