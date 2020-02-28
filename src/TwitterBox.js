import React from "react";
import "./TweetBox.css";
import Bar from "./Bar";
export default class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  handleChange = e => {
    this.setState({ content: e.target.value });
  };
  render() {
    const content = this.state.content;
    const maxLength = 50;
    const charLeft = maxLength - content.length;

    return (
      <div className="tweetbox">
        <Bar value={charLeft} max={maxLength} />
        <textarea
          onChange={this.handleChange}
          placeholder="what's happening?"
        ></textarea>
        <div>
          <span className={charLeft < 10 ? "warning" : ""}>{charLeft}</span>
          <button disabled={content.length === 0 || content.length > maxLength}>
            tweet
          </button>
        </div>
      </div>
    );
  }
}
