import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";


import HomePage from "./components/HomePage/HomePage";
import GameDetails from "./components/GameDetails/GameDetails";
import EditReviewPage from "./components/EditReviewPage/EditReviewPage";
import Cart from "./components/CartPage/CartPage";
import NotFound from "./components/PageNotFound";
import AllGamesPage from "./components/AllGamesPage/AllGamesPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games" component={AllGamesPage} />
          <Route exact path='/games/:gameId' component={GameDetails} />
          <Route exact path='/games/:gameId/reviews/:reviewId' component={EditReviewPage} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/notfound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      )}
    </>
  );
}



export default App;
