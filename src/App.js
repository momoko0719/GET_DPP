import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Chat from "./components/Chat";
import Learn from "./components/Learn";
import About from "./components/About";
import Team from "./components/Team"


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/team" element={<Team />} />
        </Route>
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
