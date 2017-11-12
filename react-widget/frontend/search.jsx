import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.filter = this.filter.bind(this);
    this.removeText = this.removeText.bind(this);
    this.names = this.props.names;
  }

  filter(event) {
    let text = event.currentTarget.value;
    console.log(text);
    if(text === "") {
      this.names = this.props.names;
    } else {
      this.names = this.props.names.filter((el) => el.toLowerCase().includes(text.toLowerCase().trim()));
    }
    this.setState({text});
  }

  removeText(event) {
    event.target.value = "";
  }

  render() {
    let ul;
    if(this.names.length !== 0) {
      ul = <ul className='namelist'>
          {this.names.map(function(el,index) {
            return <li key={index}>{el}</li>;
          })}
          </ul>;
    } else {
      ul = <p className='namelist'>None...</p>;
    }


    return (
      <div className='alist'>
        <h1>Search</h1>
        <form>
          <label>
            <input className='searchbar' onClick={this.removeText} onChange={this.filter} type="text" defaultValue='search...' />
          </label>
        </form>
        <div>
          {ul}
        </div>
      </div>
    );
  }

}



export default Search;
