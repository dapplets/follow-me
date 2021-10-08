import React from "react";
import { bridge, FileInfo } from "./bridge";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);

    this.state = {
    };
  }

  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
