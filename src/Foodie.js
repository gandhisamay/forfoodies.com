import React, { useState, useEffect } from "react";
import edamam from "./apis/edamam";
import DisplayRecipe from "./components/display_receipe";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailedRecipe from "./components/detailed_recipes";

const Foodie = () => {
  let [term, setTerm] = useState("kulcha");
  let [results, setResults] = useState({});

  useEffect(() => {
    if (!term) {
      return;
    } else {
      edamam("/v2", {
        params: {
          q: term,
        },
      })
        .then((res) => {
          setResults(res);
        })
        .catch((err) => {
          console.log("Didn't get any response!!", err);
        });
    }
  }, [term]);

  const getSearchTerm = (search) => {
    setTerm(search);
  };

  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchBar getSearchTerm={getSearchTerm} />
            <DisplayRecipe recipes={results} />
            <Footer />
          </Route>
          <Route path="/:id">
            <DetailedRecipe/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Foodie;
