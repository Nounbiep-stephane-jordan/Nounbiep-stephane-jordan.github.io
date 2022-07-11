import logo from './logo.svg';
import './App.css';
 
import Section from './components/section/section';
 
import Amazing from './components/section/amazing';
import SearchSection from './components/section/searchbarsec';
import DownloadSection from './components/section/downloadsec';
import Foot from './components/section/foot';
function App() {
  return (
 <>
  <Section/>
  <Amazing/>
  <SearchSection/>
  <DownloadSection/>
  <Foot/>
 </>
  );
}

export default App;
