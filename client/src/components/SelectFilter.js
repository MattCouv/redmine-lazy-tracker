import React, { Component } from "react";
import SearchInput from "./SearchInput";

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.listItems || [],
      showList: false
    };
  }

  filterItems = e => {
    const value = e.target.value;
    let items = this.props.listItems;
    let showList = false;
    if (value !== "") {
      items = this.state.items.filter(item => {
        return item.name.toLowerCase().indexOf(value) !== -1;
      });
      showList = true;
    }
    this.setState({ items, showList });
  };
  render() {
    let { items, showList } = this.state;
    const style = {
      display: showList ? "block" : "none"
    };
    return (
      <div className="select_filter">
        <SearchInput onChange={this.filterItems} />
        <div className="select_list closed" style={style}>
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index}>
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
