import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { store } from "./store/store";
import { PremierLeague } from "./components/PremierLeague/PremierLeague";
import { LaLiga } from "./components/LaLiga/LaLiga";
import { SeriaA } from "./components/SeriaA/SeriaA";
import { Bundesliga } from "./components/Bundesliga/Bundesliga";
import { Chempionsleague } from "./components/Chempionsleague/Chempionsleague";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/championsleague",
      element: <Chempionsleague />,
    },
    {
      
      path: "/premierleague",
      element: <PremierLeague/>
    },
    {
      
      path: "/laliga",
      element: <LaLiga/>,
    },
    {
      path: "/seriaa",
      element: <SeriaA />,
    },
    {
      path: "/bundesliga",
      element: <Bundesliga />,
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
