import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Card from './components/Card/Card';

const customersData = [
  {
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Chris Friedkly",
    description: "Supermarket Villanova",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Maggie Johnson",
    description: "Oasis Organic Inc.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Gael Harry",
    description: "New York Finest Fruits",
  },
  {
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Jenna Sullivan",
    description: "Walmart",
  },
];


function App() {
  return (
    <div className="flex p-4 gap-4 bg-off_white">
      <Sidebar />
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex w-full gap-4 '>
          <Card
            className="w-[40%]"
            title="Revenues"
            value="15%"
            description="Increase compared to last week"
            navLink="Revenues report"
            theme="text"
            increase={true}
          />
          <Card
            className="w-[40%]"
            title="Lost deals"
            value="4%"
            description="You closed 96 out of 100 deals"
            navLink="All deals"
            theme="text"
            
          />
          <Card
            className="w-[20%]"
            title="Quarter goal"
            value="84%"
            navLink="All goals"
            theme="chart"
          />
        </div>
        <div>
        <Card
            className="w-[50%]"
            title="Customers"
            description={customersData}
            navLink="All customers"
            theme="avatarCard"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
