// import logo from './logo.svg';
import './App.css';
import Graphs from './Graphs';

const BASE_API_URL = "https://thingspeak.com/channels/1706329/charts/";
const BASE_QUERY = "&dynamic=true&results=60";
const datas = [
  //  `${BASE_API_URL}1?bgcolor=%23f9fafb&color=%23d62020${BASE_QUERY}&title=Carbon+Monoxide&type=line&yaxis=PPM&yaxismin=0&yaxismax=200`,
  `https://thingspeak.com/channels/1706329/widgets/449183`,
  `${BASE_API_URL}2?bgcolor=%23FFFFFF&color=%23d62020${BASE_QUERY}&&title=Humidty&type=line&yaxis=Percentage&type=column&yxismin=0&yaxismax=100`,
  `${BASE_API_URL}3?bgcolor=%23FFFFFF&color=%23d62020${BASE_QUERY}&title=Temprature&type=line&yaxis=Celcius&type=column&yaxismin=0&yaxismax=100`,
  `${BASE_API_URL}4?bgcolor=%23FFFFFF&color=%23d62020${BASE_QUERY}&title=Methane&type=line&yaxis=PPB&type=column&yaxismin=0&yaxismax=2000`,
  `${BASE_API_URL}4?bgcolor=%23FFFFFF&color=%23d62020${BASE_QUERY}&title=Alchohol&type=line&type=column&yaxis=PPB&yaxismin=0&yaxismax=2000`
];

function App() {

  

  console.log('hello');
  return (
    <div className="App">
      <p className='para'>Welcome to the charts</p>
      <div className='row'>{datas.map((data => <Graphs value={data} />))}
      </div>
    </div>
  );
}

export default App;
