// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// let name = "Ashish";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03031e';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    // JSX  (It's 90-95 % html only)
    <>
      <Router>
        <Navbar tit="TextUtils" mode={mode} toggleMode={toggleMode} aboutxt="About" />
        {/* <Navbar /> */}
        {/* <Alert alert="Hello World !"></Alert> */}
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, toggle case" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
