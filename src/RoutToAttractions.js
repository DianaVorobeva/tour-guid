import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Attractions from "./Attractions";

function RoutToAttractions({countryName, countryId}) {
   
    return(
        <div>
      <Router>
      <nav>
        <Link to="/att">View attractions in {countryName}</Link>
      </nav>
      <Routes>
        <Route path="/att" element={ <Attractions countyName={countryName} countryId={countryId}/> }/>
      </Routes>
      </Router>
      </div>
    )
}

// export default RoutToAttractions;