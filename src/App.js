import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };
  filterAuthors = query => {
    let filteredAuthors = this.state.authors.filter(author => {
      const name = `${author.first_name} ${author.last_name}`;
      return name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredAuthors: filteredAuthors });
  };
  selectView = (author = null) => {
    if (this.state.currentAuthor)
      return <AuthorDetail author={this.state.currentAuthor} />;
    else
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
          filteredAuthors={this.state.filteredAuthors}
        />
      );
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.selectView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
