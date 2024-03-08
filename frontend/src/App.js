import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <main className="py-3">
          <Container>
            <h1>Welcome to E-COM TEST</h1>
            <Outlet />
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
