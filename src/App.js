import SimpleSignupForm from './SimpleSignupForm'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() { return (
      <>
        <Router>
            <div className="container">
                  <nav>
                    <Link to="/">
                      <button>
                          Simple Sign Up Form
                      </button>
                      </Link>
                    <Link to="/test">
                      <button>
                        Test
                      </button>
                    </Link>
                    <Link to="/test2">
                      <button>
                        Test 2
                      </button>
                    </Link>
                  </nav>
              <Switch>
                <Route exact path="/">
                  <SimpleSignupForm />
                </Route>
                <Route path="/about">
                  
                </Route>
                <Route path="/users">
                  
                </Route>
              </Switch>
            </div>
        </Router>

        <footer>
         <p> This website is a demo of all the forms samples at </p> <a href="https://formik.org/"> FORMIK REACT</a>   
        </footer>
      </>
  ) }

export default App;
