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
    console.log("From useeffect", term);
    if (!term) {
      console.log("From if");
      return;
    } else {
      console.log("in else", term);
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
    console.log("before set term!!", term);
    setTerm(search);
    console.log(term);
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
          <Route exact path="/:id">
            <DetailedRecipe recipe={results} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Foodie;
