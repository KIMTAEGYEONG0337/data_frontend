import * as React from 'react';
import './App.css';
import simpleNode from './demo/simpleNode';
import simpleFlow from './demo/simpleFlow';
import simpleLock from "./demo/simpleLock";
import simpleGridSize from "./demo/simpleGridSize";
import simpleEventListener from "./demo/simpleEventListener";
import simpleZoomToFit from "./demo/simpleZoomToFit";
import simpleDynamicPorts from "./demo/simpleDynamicPorts";
import AdvancedCloneSelected from "./demo/AdvancedCloneSelected";
import ChainedDropDown from "./demo/ChainedDropDown";
import DragAndDrop from "./demo/DragAndDrop";

// deleting line >> shift + right click

function App() {
  return (
      // DragAndDrop()
      // ChainedDropDown()
      simpleNode()
      // simpleFlow()
      // simpleLock()
      // simpleGridSize()
      // simpleEventListener()
      // simpleZoomToFit()
      // simpleDynamicPorts()
      // AdvancedCloneSelected()
  );
}

export default App;