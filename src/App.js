
import './App.css';
import Feed from './Components/Feed/Feed';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';

// margin 0 in app.js

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
      
    </div>
  );
}

export default App;
