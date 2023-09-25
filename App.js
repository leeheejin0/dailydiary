import './App.css';
import './components/List/DiaryList.js';
import DiaryList from './components/List/DiaryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DiaryList></DiaryList>
      </header>
    </div>
  );
}

export default App;
