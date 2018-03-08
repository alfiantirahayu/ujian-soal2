import React from 'react';
import axios from 'axios';
import Nama from './components/Nama';
import './App.css';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
      data: []}}
      
	getData = team => 
		axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${team}`)
		.then(res => this.setState({data: res.data.player}))
		.catch(err => console.log(err))
  render = () =>
  <div class="container">
		<div id="app">
			<div className="form-group">
				<h1>{`Members Of ${this.state.search}`}</h1>
        <table>
          <tr>
            <th>
        <input onChange={() => this.setState({search: this.refs.search.value})}className="form-control" type="text" ref="search"/></th>
        <th><button onClick={() => this.getData(this.refs.search.value)} className="btn btn-success">Klik</button>
        </th>
          </tr>
            </table>
			</div>
			<div id="display">
				{this.state.data.map(x => <Nama key={x.idPlayer} {...x}/>)}
			</div>
		</div>
    </div>
}