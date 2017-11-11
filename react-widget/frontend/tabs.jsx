import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = { currentTab: 0};
    this.click = this.click.bind(this);
  }

  click(event) {
    const currentTab = parseInt(event.target.id);
    const children = Array.from(event.currentTarget.children);
    children.forEach(el =>{
      el.className = "";
    });
    event.target.className = 'selected';
    this.setState({ currentTab });
  }

  render() {
    return (
      <div className={this.props.className}>
        <ul onClick={this.click}>
          <li className='selected' id='0'>{this.props.data[0].title}</li>
          <li id='1'>{this.props.data[1].title}</li>
          <li id='2'>{this.props.data[2].title}</li>
        </ul>
        <section>
          <p>{this.props.data[this.state.currentTab].content}</p>
        </section>
      </div>
    );
  }
}

export default Tabs;
