import { useState } from "react";

const State = () => {
  /*  
   React updates state Asynchronously(Not Immediately) .
   React takes all of its updates, batches them and applies them at a later time 
   We use the state hook to store the state of a component outside of it.
   React stores all of the state variables of a component and will automatically remove these 
   variables when the component is no longer visible on the screen
   
   We use hooks at the top level of our components
   */

  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(false);
  return (
    <>
      <div>
        <p>An overview of state hooks</p>
        <button
          onClick={() => {
            if (isVisible === false) {
              setVisibility(true);
              console.log("Visbility set to true");
              // React will show the old value of isVisible which happens to be false
              console.log(isVisible);
            }

            if (isApproved === false) {
              setApproved(true);
              console.log("Approved set to true");
              // React will show the old value of isApproved which happens to be false
              console.log(isApproved);
            }
          }}
        >
          Click to Console.log
        </button>
      </div>
    </>
  );
};

export default State;
