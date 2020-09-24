import React,{useState} from 'react';
import './App.css';
import Main from './Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sponsor, setSponsor] = useState([
    { sponsorName:"AlFA", completed: false},
    { sponsorName: "Sponsor2", completed: false},
    { sponsorName: "Black Rock", completed: false},
    { sponsorName: "Adidas", completed: false},
    { sponsorName: "Sponsor4", completed: true},
    { sponsorName: "Eigen", completed: false}
  ]);

  return (
    <div className="App">

      <Main SponsorData={sponsor}/>

    </div>
  );
}

export default App;
