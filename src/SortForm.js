import React from "react";

export class SortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "abv",
      sortOrder: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSortChanges = this.handleSortChanges.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedValue: e.target.value,
    });
    console.log("SORTFORM", this.state.selectedValue);
  }

  handleRadioChange(e) {
    this.setState({
      sortOrder: e.target.value,
    });
    console.log("RadioButtonWorks", e.target.value);
  }

  handleSortChanges(e) {
    if (this.state.sortOrder === null) {
      console.log("Choose sort order");
    }
    this.props.sortedCards(this.state.selectedValue, this.state.sortOrder);
  }

  render() {
    return (
      <div className="sortForm">
        <label for="sort">Option to sort</label>
        <select
          id="sort"
          name="sort"
          onChange={(e) => {
            this.handleChange(e);
          }}
        >
          <option name="abv" value="abv">
            abv
          </option>
          <option name="ibu" value="ibu">
            ibu
          </option>
          <option name="ph" value="ph">
            ph
          </option>
          <option name="srm" value="srm">
            srm
          </option>
        </select>{" "}
        <br />
        <form>
          <input
            type="radio"
            id="fromBiggest"
            value="fromBiggest"
            name="checkOrder"
            onChange={(e) => {
              this.handleRadioChange(e);
            }}
          />
            <label for="fromBiggest">Sort from the biggest value to the smallest</label> <br /> {" "}
          <input
            type="radio"
            id="fromSmallest"
            value="fromSmallest"
            name="checkOrder"
            onChange={(e) => {
              this.handleRadioChange(e);
            }}
          />
           <label for="fromSmallest">Sort from the smallest value to the biggest</label> <br />
        
        <input type="button" value="Sort" onClick={this.handleSortChanges} />
        </form>
      </div>
    );
  }
}
