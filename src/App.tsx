import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Technologies />
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;
