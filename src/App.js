import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Card from './components/Card/Card';

function App() {
  return (
    <div className="flex p-4 gap-4 bg-light_gray">
      <Sidebar />
      <div className='flex w-full gap-4'>
        <Card
          className="w-[39%]"
          name="Revenues"
          value="15%"
          description="Increase compared to last week"
          navLink="Revenues report"
        />
        <Card
          className="w-[39%]"
          name="Lost deals"
          value="4%"
          description="You closed 96 out of 100 deals"
          navLink="All deals"
        />
        <Card
          className="w-[18%]"
          name="Quarter goal"
          value="84%"
          description={null}
          navLink="All goals"
        />
      </div>
    </div>
  );
}

export default App;
