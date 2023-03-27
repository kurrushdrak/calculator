
import './App.css'


function App(){
  {/*this.state = { data: ''}
  const calculate = () => {
    try {
        const result = eval(this.state.data);
        this.setState({data: result});
    } catch (e) {
        this.setState({data: 'error'})
    }
}
const handleClick = e => {
    const value = e.target.getAttribute('data-value');
    switch(value) {
        case 'clear':
            this.setState({ data: ''});
            break;
        case 'equal':
            this.calculate();
            break;
        default:
            this.setState({ data: this.state.data + value});
    }
}
*/}

  return (
    <div className='container' style={{marginTop:10}}>
      {/*<Display data={this.state.data}/>*/}

      <div className='card' style={{marginTop:10}}>
        <div className='card-header'>
          <h1>Calculator </h1>
        </div>
        <div className='card-body' >
          <input type="text" placeholder='ENTER THE VALUE' style={{ marginBottom: 20 }} name="form" /><br />
          <div className='first'>
            <button style={{ marginRight: 10 }}>%</button>

            <button  style={{ marginRight: 10 }}>CE</button>
            <button   style={{ marginRight: 10 }}>C</button>

            <button  ><img src="data:image/jpeg;base64,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" width="20" height="20" /></button><br />
          </div>
          <div className='second'>
            <button  style={{ marginRight: 10 }}>1/x</button>

            <button style={{ marginRight: 10 }}>x<sup>2</sup></button>
            <button   style={{ marginRight: 10 }}>x<sup>1/2</sup></button>

            <button  ><img src="https://th.bing.com/th/id/OIP.NMap1NZp254kyo_aVR4nCwHaJl?w=152&h=197&c=7&r=0&o=5&pid=1.7" width="20" height="20" /></button><br />
          </div>
          <div className='third'>
            <button   style={{ marginRight: 10 }} >7</button>
            <button  style={{ marginRight: 10 }}>8</button>
            <button  style={{ marginRight: 10 }}>9</button>
            <button  ><img src="data:image/jpeg;base64,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" width="20" height="20" /></button><br />
          </div>
          <div className='fourth'>
            <button    style={{ marginRight: 10 }}>4</button>
            <button  style={{ marginRight: 10 }}>5</button>
            <button  style={{ marginRight: 10 }}>6</button>
            <button >-</button><br />
          </div>
          <div className='fifth'>
            <button  style={{ marginRight: 10 }}>1</button>
            <button  style={{ marginRight: 10 }}>2</button>
            <button  style={{ marginRight: 10 }}>3</button>
            <button >+</button><br />
          </div>
          <div className='six'>
            <button  style={{ marginRight: 10 }} >+/-</button>
            <button  style={{ marginRight: 10 }}>0</button>
            <button  style={{ marginRight: 10 }}>.</button>
            <button style={{ backgroundColor: ' rgb(200, 175, 91)' }}>=</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
