import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./MainComopnent/navbar/Navbar";
import Home from "./MainComopnent/Home/Home";
import Subscriptions from "./MainComopnent/subscription/Subscriptions";
import Contact from "./MainComopnent/contact/Contact";
import { AuthContext } from './Context/AuthContext'
import { useContext } from 'react'
import Auth from "./MainComopnent/Auth/Auth";
import Dashboard from "./dashboard/Dashboard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem("user") || "null");
};

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser || isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

const queryClient = new QueryClient();

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
      {currentUser ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<PrivateRoute />}>
              <Route path="/subscriptions" element={<Subscriptions />} />
            </Route>
            <Route path="/login" element={<Auth />} />
          </Routes>
        </>
      )}
    </QueryClientProvider>
  );
};

export default App