import Main from "./component/mainpage/Main";

import Header from "./component/common/Header";

import Department from './component/subpage/Department';
import Community from './component/subpage/Community';
import Gallery from './component/subpage/Gallery';
import Youtube from './component/subpage/Youtube';
import Location from './component/subpage/Location';
import Join from './component/subpage/Join';

import Footer from './component/common/Footer';

import './scss/style.scss';

import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/">
            <Header type={"sub"} />
          </Route>          
        </Switch>

        <Route path="/department" component={Department}></Route>
        <Route path="/community" component={Community}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/youtube" component={Youtube}></Route>
        <Route path="/location" component={Location}></Route>
        <Route path="/join" component={Join}></Route>

        <Footer />
    </div>

  );
}

