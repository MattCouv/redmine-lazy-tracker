import React, { Component } from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

class SelectFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Object.keys(this.props.listItems)
    };
  }

  filterItems = e => {
    const value = e.target.value.toLowerCase();
    const { listItems } = this.props;
    let items = Object.keys(listItems);
    if (value !== "") {
      items = Object.keys(listItems).filter(item => {
        return listItems[item].name.toLowerCase().indexOf(value) !== -1;
      });
    }
    this.setState({ items });
  };
  render() {
    const { items } = this.state;
    const style = {
      display: this.props.open ? "block" : "none"
    };
    return (
      <div className="select_filter" style={style}>
        <SearchInput onChange={this.filterItems} />
        <div className="select_list closed">
          <ul>
            {items.map(id => {
              const item = this.props.listItems[id];
              return (
                <li
                  key={id}
                  className={item.parent !== undefined ? "child" : ""}
                  onClick={() => {
                    this.props.setCurrentProject(item.id);
                    this.props.toggle();
                  }}
                >
                  <Link to={`/projects/${item.id}`}>
                    {item.name}
                  </Link>
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
