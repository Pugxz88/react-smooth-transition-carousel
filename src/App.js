
import SliderContent from './components/sliderContent/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{marginLeft:"50px"}}>
        <p><strong>
          Custom size React smooth transition auto slider carousel</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <div style={{position: "relative",display:"inline-block",marginLeft:"20px"}}>
              <div className="headerTop">
                  <div className="headerTopSlide">
                      <SliderContent />
                  </div>
              </div>
          </div>
      </header><br />
        <div style={{position: "relative",display:"inline-block",marginLeft:"100px"}}>
            <div className="headerTop">
                <div className="headerTopSlide" style={{width:"500px",height:"150px"}}>
                    <SliderContent />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
