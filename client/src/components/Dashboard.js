import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SurveyList from "./surveys/SurveyList";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const {auth, history} = props;

  useEffect(() => {
    if (auth === false) {
      // Redirect to homepage if not logged in
      history.push('/');
    }
  }, [auth, history]);

  return (
    <div>
      {auth ? (
        <SurveyList />
      ) : (
        <h1>Please login to view your surveys</h1>
      )}
 
      <div className="fixed-action-btn">
        <Link to={{pathname:"/surveys/new", state: auth }} className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Dashboard);