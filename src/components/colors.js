import React from "react";
class MyColor extends React.Component {
  render() {
    return (
      <div className="iframe-display">
        <iframe
          className="iframe"
          src="https://materialuicolors.co/"
          title="color"
        />
      </div>
    );
  }
}
export default MyColor