import {Routes, Route} from "react-router-dom";
import BetaReactInfo from "./components/BetaReactInfo";

import Docs from "./components/Docs";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BetaReactInfo/>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
