import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(e){
    this.setState({
      search: e.target.value.substr(0, 50)
    });
  }

  render() {
    let filteredPosts = posts.filter(
      (post) => {
        return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return (
      <div>
        <div className="filter">
          <input type="text" value={this.state.search} 
          onChange={this.updateSearch.bind(this)} 
          placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {filteredPosts.map((post, index) =>
          <li key={index}>
            <a href={post.url}><img src={post.image } alt="PhotoLink" /></a>
            <p>{ post.title }</p>
          </li>
          )}
        </ul>
      </div>
    )
  }
}


export default App


