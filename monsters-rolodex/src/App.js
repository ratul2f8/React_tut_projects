import React,{Component} from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css'
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
    constructor(){
      super();
      this.state = {
        userRecords:[],
        searchField: ''
      }
     
    }
    handleChange = (e) =>{
    this.setState({searchField : e.target.value})
    }
    render(){
      const {userRecords,searchField } = this.state
      const filteredCards = userRecords.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return(
      
        <div className="App" text-align="center">
         <h1 className="monstersRolodex">Monsters Rolodex</h1> 
        <SearchBox 
          type="search"
          placeholder="Search monsters"
          handleChange={this.handleChange}
        ></SearchBox>
          <CardList userRecords = {filteredCards}/>
        </div>
      )
    }
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users").then(responses => responses.json()).
      then(allUsers => this.setState({userRecords : allUsers}))
    }
    
}
export default App;