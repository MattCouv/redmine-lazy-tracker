import React, { Component } from "react";
import SearchInput from "./SearchInput";

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.listItems
    };
  }

  onClick = e => {
    this.props.setCurrentProject(e.target.innerText);
  };

  filterItems = e => {
    const value = e.target.value.toLowerCase();
    let items = this.props.listItems;
    if (value !== "") {
      items = this.props.listItems.filter(item => {
        return item.name.toLowerCase().indexOf(value) !== -1;
      });
    }
    this.setState({ items });
  };
  render() {
    let { items } = this.state;
    const style = {
      display: this.props.open ? "block" : "none"
    };
    return (
      <div className="select_filter" style={style}>
        <SearchInput onChange={this.filterItems} />
        <div className="select_list closed">
          <ul>
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.parent !== undefined ? "child" : ""}
                  onClick={() => {
                    this.props.setCurrentProject(item.id);
                    this.props.toggle();
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectFilter;
