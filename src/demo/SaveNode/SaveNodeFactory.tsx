import * as React from "react";
import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import {SaveNode} from "./SaveNode";
import SaveNodeWidget from "./SaveWidget";

class SaveNodeFactory extends AbstractReactFactory<
    SaveNode,
    DiagramEngine
    > {
    constructor() {
        super("save-node");
    }

    generateReactWidget(event: any) {
        return <SaveNodeWidget node={event.model} engine={this.engine} />;
    }

    generateModel(event: any) {
        return new SaveNode(this.engine);
    }
}

export default SaveNodeFactory;
