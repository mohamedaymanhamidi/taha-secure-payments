import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaymentCard from "./components/PaymentCard";
import Background from "./components/Background";
import { payments } from "./data/payments";

function App() {
  return (
    <div className="app">
      <Background />

      <Header />

      <div className="cards">
        {payments.map((p, index) => (
          <PaymentCard key={index} {...p} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;