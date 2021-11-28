import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  onSearchChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handelChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
