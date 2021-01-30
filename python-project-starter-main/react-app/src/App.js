import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CreateVenue from "./components/CreateVenue";
import Reservations from "./components/Reservations";
// import AddReview from "./components/AddReview";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage"
import { authenticate } from "./services/auth";
import SearchResults from "./components/SearchResults";
import VenueReview from "./components/VenueReview";
import VenueInfo from "./components/VenueInfo";
import Media from "./components/Media"
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path="/media" exact={true} authenticated={authenticated}>
          <Media />
        </ProtectedRoute>
        <ProtectedRoute path="/results" exact={true} authenticated={authenticated}>
          <SearchResults />
        </ProtectedRoute>
        <ProtectedRoute path="/create-venue" exact={true} authenticated={authenticated}>
          <CreateVenue />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/reviews" exact={true} authenticated={authenticated}>
          <AddReview />
        </ProtectedRoute> */}
        <ProtectedRoute path="/reviews/:venueId" exact={true} authenticated={authenticated}>
          <VenueReview />
        </ProtectedRoute>
        <ProtectedRoute path="/reservations" exact={true} authenticated={authenticated}>
          <Reservations />
        </ProtectedRoute>
        <ProtectedRoute path="/reservations/:venueId" exact={true} authenticated={authenticated}>
          <Reservations />
        </ProtectedRoute>
        <ProtectedRoute path="/venues/:venueId" exact={true} authenticated={authenticated}>
          <VenueInfo />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
