## Setup

1. Fork the [repository](https://github.com/JoinCODED/RJS4-TheIndex-Events-and-States)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn install
```

*5.* Install the required packages for FontAwesome.

```shell
$ yarn add @fortawesome/fontawesome-svg-core
$ yarn add @fortawesome/free-solid-svg-icons
$ yarn add @fortawesome/react-fontawesome
```

*6.* Run the project.

```shell
$ yarn start
```
---

## Task

#### 1. `AuthorDetail.js`

Clicking on an author should take the user to a detail page for that author, including all their books.  
Here is the JSX for the detail page:

```html
<div className="author col-xs-10">
    <div>
        <h3>I SHOULD BE AN AUTHOR NAME</h3>
        <img src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png" className="img-thumbnail" alt=""/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>I SHOULD BE A BOOK NAME</td>
                <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
                <td>
                    <button className="btn" style={{backgroundColor: "blue"}}/>
                </td>
            </tr>
            <tr>
                <td>I SHOULD BE ANOTHER BOOK NAME</td>
                <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
                <td>
                    <button className="btn" style={{backgroundColor: "red"}}/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

1. Create a shiny new `AuthorDetail` component that renders the above JSX.
2. Render your new component in `App.js` inside the `div.content`.

You should see both the `AuthorList` and `AuthorDetail` on the screen at the same time. We'll move `AuthorDetail` later.


#### 2. Selecting an author

`AuthorDetail` is filled with dummy data right now.  
Let's make it so that clicking on an author changes the content.  

1. Give the `App` component a new `state` property called `currentAuthor` that represents the currently selected author. Set its initial value to `null`.
2. Give the `App` a new method `selectAuthor = author => { ... }`. This method takes an author object as a parameter and uses it to update `currentAuthor` on the state. We're going to use `selectAuthor` as an event handler.
3. Pass the `selectAuthor` method to the `AuthorCard`. To do this you're going to have to pass the method as a prop two levels down:
    * From `App` to `AuthorList`
    * From `AuthorList` to each individual `AuthorCard`
5. Attach the method to the `onClick` event of the `AuthorCard`. Remember you're also going to be passing the card's `author` as an argument to the method when it's called. You can check that everything is working properly by inspecting the state of the `App` component in the react dev tools.
6. Add some conditional rendering logic so that the `AuthorDetail` component only shows up when an author is selected (it should completely replace the `AuthorList` component). 
7. Update the `AuthorDetail` component so that it takes the currently selected author as a prop. Use this author object to fill in as many details as you can.
 



#### 3. Unselecting an Author

We need a way to go back to the author list view without refreshing the page.  
When a user clicks on "AUTHORS" in the sidebar, they should go back to the list view:

1. Add a new method to `App` that resets the `currentAuthor` in the state.
2. Pass this method via props to the `Sidebar` component and make it the `onClick` handler for the `button`.



#### 4. Search Bar

We want our users to be able to search through the authors in the list view:

1. Create a new `SearchBar.js` file with the following component:

```javascript
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
                    className="form-control"
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
```

Take some time to really understand what this component is doing. [This](https://reactjs.org/docs/forms.html#controlled-components) article might help.

2. Import the `SearchBar` into the `AuthorList` and render it near the top of the page.

3. Add a `filterAuthors = query => { ... }` method to `App`. This method should filter the authors in `authors` based on the `query`.
Things to think about:
    - You will need to have **two** arrays in the state. One for the **authors** and one for the **filtered authors**.
    - How can you [filter](https://warehouse.joincoded.com/workshop/javascript-episode-iii/array-iteration-methods/filter/) an array based on some condition?
    - How do you know if a string [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) another string?
    - How do you make the search case-**in**sensitive?
    
4. Pass your `filterAuthors` method to the `SearchBar` component.

5. Call the passed in `filterAuthors` method every time there's a change in the input field.
