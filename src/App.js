import React,{Component} from 'react';
import {stringify} from 'querystring';
import './App.css';

import Radio from './Radio.js';
import Checkbox from './Checkbox.js';

const giftAmounts = [
  "25",
  "50",
  "100",
  "250",
  "500",
  "1000",
  "2500",
  "5000"
];

const pledgeAmounts = [
  "60",
  "120",
  "240",
  "480",
  "1000",
  "2500",
  "5000",
  "10000"
];

const designations = [
  {
    value: "3",
    label: "Area of Greatest Need"
  },
  {
    value: "301",
    label: "Athletics"
  },
  {
    value: "435",
    label: "Ackerman Center for Holocaust Studies"
  },
  {
    value: "2",
    label: "Alumni Relations"
  },
  {
    value: "386",
    label: "School of Arts & Humanities"
  },
  {
    value: "1895",
    label: "Arts, Technology, and Emerging Communication"
  },
  {
    value: "1221",
    label: "Asia Center"
  },
  {
    value: "472",
    label: "Behavioral and Brain Sciences"
  },
  {
    value: "727",
    label: "Callier Center for Communication Disorders"
  },
  {
    value: "276",
    label: "Center for BrainHealth"
  },
  {
    value: "1395",
    label: "Center for Vital Longevity"
  },
  {
    value: "721",
    label: "Economic, Political and Policy Sciences"
  },
  {
    value: "692",
    label: "Eugene McDermott Scholars Program"
  },
  {
    value: "485",
    label: "Friends of McDermott Library"
  },
  {
    value: "2118",
    label: "Fund for UT Dallas"
  },
  {
    value: "289",
    label: "Galerstein Gender Center"
  },
  {
    value: "83",
    label: "Interdisciplinary Studies (General Studies)"
  },
  {
    value: "84",
    label: "Johnsson School of Engineering & Computer Science"
  },
  {
    value: "2259",
    label: "Margaret McDermott Memorial Fund"
  },
  {
    value: "39",
    label: "Naveen Jindal School of Management"
  },
  {
    value: "299",
    label: "School of Natural Sciences and Mathematics"
  },
  {
    value: "1011",
    label: "Office of Diversity and Community Engagement"
  },
  {
    value: "139",
    label: "Scholarships and Fellowships"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "bboxdonation$gift$BBFormGiftChoice": "bboxdonation_gift_lblChoiceSingleGift",
      "bboxdonation$gift$GivingLevel": "100",
      "bboxdonation$gift$PledgeAmount": "60",
      copySuccess: ""
    };
  }

  componentWillMount = () => {
    this.selectedDesignations = new Set();
  }

  handleOptionChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toggleCheckbox = label => {
    if (this.selectedDesignations.has(label)) {
      this.selectedDesignations.delete(label);
    } else {
      this.selectedDesignations.add(label);
    }
    this.forceUpdate();
  }

  buildURI() {
    let designationList = Array.from(this.selectedDesignations);
    let queryString = {
      "bboxdonation$designation$ddDesignations": designationList,
      "bboxdonation$gift$BBFormGiftChoice": this.state["bboxdonation$gift$BBFormGiftChoice"]
    };
    let base = `https://cmsdev.utdallas.edu/development/giving/?bboxdonation$gift$BBFormGiftChoice=${this.state["bboxdonation$gift$BBFormGiftChoice"]}`;
    if (this.state["bboxdonation$gift$BBFormGiftChoice"] === "bboxdonation_gift_lblChoiceSingleGift") {
      base += `&bboxdonation$gift$GivingLevel=${this.state["bboxdonation$gift$GivingLevel"]}`;
    } else {
      base += `&bboxdonation$gift$PledgeAmount=${this.state["bboxdonation$gift$PledgeAmount"]}`;
    }
    base += Array.from(this.selectedDesignations).reduce((accumulator, designation) => {
      return accumulator + `&bboxdonation$designation$ddDesignations[]=${designation}`;
    }, "");
    return base;
  }

  render() {
    let donationAmountButtons;
    // If it's a one-time gift
    if (this.state["bboxdonation$gift$BBFormGiftChoice"] === "bboxdonation_gift_lblChoiceSingleGift") {
      donationAmountButtons = giftAmounts.map((amount) => {
        return (
          <Radio
            name="bboxdonation$gift$GivingLevel"
            value={amount}
            selectedOption={this.state["bboxdonation$gift$GivingLevel"]}
            handleOptionChange={this.handleOptionChange}
            label={amount}
            key={amount}
          />
        );
      });
    // If it's a recurring gift
    } else {
      donationAmountButtons = pledgeAmounts.map((amount) => {
        return (
          <Radio
            name="bboxdonation$gift$PledgeAmount"
            value={amount}
            selectedOption={this.state["bboxdonation$gift$PledgeAmount"]}
            handleOptionChange={this.handleOptionChange}
            label={amount}
            key={amount}
          />
        );
      });
    }

    let designationCheckboxes = designations.map((designation) => {
      return (
        <Checkbox
          label={designation.label}
          value={designation.value}
          handleCheckboxChange={this.toggleCheckbox}
          key={designation.value}
        />
      );
    });

    return (
      <div className="App">
        <h1>Link Generator</h1>
        <div className="giftType">
          <h3>Gift Type</h3>
          <Radio
            name="bboxdonation$gift$BBFormGiftChoice"
            value="bboxdonation_gift_lblChoiceSingleGift"
            selectedOption={this.state["bboxdonation$gift$BBFormGiftChoice"]}
            handleOptionChange={this.handleOptionChange}
            label="One-time gift"
          />
          <Radio
            name="bboxdonation$gift$BBFormGiftChoice"
            value="bboxdonation_gift_lblChoicePledge"
            selectedOption={this.state["bboxdonation$gift$BBFormGiftChoice"]}
            handleOptionChange={this.handleOptionChange}
            label="Pledge to Give"
          />
        </div>
        <div className="donationAmount">
          <h3>Donation Amount</h3>
          {donationAmountButtons}
        </div>
        <div className="designations">
          <h3>Designations</h3>
          {designationCheckboxes}
        </div>
        <div className="uri">
          <h3>Here's your Custom URL</h3>
          <a href={this.buildURI()}>{this.buildURI()}</a>
        </div>
      </div>
    );
  }
}
