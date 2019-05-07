import React,{Component} from 'react';

export default class Radio extends Component {
  render() {
    return (
      <div className="radioButton">
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            checked={this.props.selectedOption === this.props.value}
            onChange={this.props.handleOptionChange}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}
