import React,{ PureComponent } from 'react';
import Button from '@material-ui/core/Button';

import ReactMarkdown from 'react-markdown';
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Tab from "./tab";


const childre1=()=>
(
  <div>
  <br/>
  <h2><b>Default</b></h2>
  <div className="buttons">
      <Button>Default</Button>
      <Button color="primary">
          babycrib
      </Button>
      <Button color="secondary">
          babytoy
      </Button>
      <Button disabled>
          Disabled
      </Button>
  </div>
  <h2><b>Outlined</b></h2>
  <div className="buttons">
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
          chair
      </Button>
      <Button variant="outlined" color="secondary">
          desk
      </Button>
      <Button variant="outlined" disabled>
          Disabled
      </Button>
  </div>
  <h2><b>Contained</b></h2>
  <div className="buttons">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
          Primary
      </Button>
      <Button variant="contained" color="secondary">
          Secondary
      </Button>
      <Button variant="contained" disabled>
          Disabled
      </Button>
  </div>
  <h2><b>Size</b></h2>
  <div className="buttons">
      <Button size="small" variant="contained">
          Small
      </Button>
      <Button size="medium" variant="contained" color="secondary">
          Medium
      </Button>
      <Button size="medium" variant="contained" disabled>
          Disabled
      </Button>
      <Button size="large" variant="contained" color="primary">
          Large
      </Button>
  </div>
</div>)

 
    
let string0 = `
import Button from '@material-ui/core/Button';
  <Button color="primary" variant="outlined ">
    Button1
  </Button>
  <Button color="secondary" variant="contained">
    Button2
  </Button>`;

  // const code = props=>(
  //    <SyntaxHighlighter language={ null|| 'javascript'} style={dark} >
  //   {value}
  //  </SyntaxHighlighter>)

    
  class Buttonn extends React.Component {
        render(){
            return(
      <div>
      <Tab children1 = {childre1}  children2 = {<ReactMarkdown source={string0} />} label0="Button"/>
      </div>);
    }
}
  



export default Buttonn;
