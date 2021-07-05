import {SignupForm, SignupFormValidation, FormValitaionWithYup, UsingFormikContext} from './forms'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() { return (
      <>
        <Router>
            <div className="container">
                  <nav>
                    <Link to="/">
                      <button>
                          Simple Sign Up Form (without validation)
                      </button>
                      </Link>
                    <Link to="/form-validation">
                      <button>
                        Simple Sign Up Form (with vanilla JS validation)
                      </button>
                    </Link>
                    <Link to="/yup">
                      <button>
                        Schema Validation with Yup
                      </button>
                    </Link>
                    <Link to="/context">
                      <button>
                        using FORMIK context
                      </button>
                    </Link>
                  </nav>
              <Switch>
                <Route exact path="/">
                  <SignupForm />
                </Route>
                <Route path="/form-validation">
                  <SignupFormValidation />
                </Route>
                <Route path="/yup">
                  <FormValitaionWithYup />
                </Route>
                <Route path="/context">
                  <UsingFormikContext />
                </Route>
              </Switch>
            </div>
        </Router>

        <footer>
         <p> This website is a demo of forms samples with</p> <a href="https://formik.org/">FORMIK REACT</a>   
        </footer>
      </>
  ) }

export default App;
