import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/home/Home"));
const About = React.lazy(() => import("./pages/about/About"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const Blog = React.lazy(() => import("./pages/blog/Blog"));
const ClientStories = React.lazy(() =>
  import("./pages/clientStories/ClientStories")
);

const CustomSoftwareDevelopment = React.lazy(() =>
  import("./pages/services/CustomSoftwareDevelopment")
);

const NotFound = React.lazy(() => import("./pages/notFound/NotFound"));

const App = () => {
  return (
    <div className="bg-black">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/client-stories" element={<ClientStories />} />

          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
