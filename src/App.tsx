import React from "react";
import Counter from "./Counter";
//[% if include_footer == 'yes' %]
import Footer from "./Footer";
//[% endif %]

const App: React.FC = () => {
  const components = [
    <Counter />,
    //[% if include_footer == 'yes' %]
    <Footer />,
    //[% endif %]
  ];
  return (
    <div>
      <h1>{"Hello, <@@ project_name @@>!"}</h1>
      {components}
    </div>
  );
};

export default App;
