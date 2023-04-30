import createEngine from "@projectstorm/react-diagrams";
import {DiagramModel, DefaultNodeModel, DefaultLinkModel} from "@projectstorm/react-diagrams";
import * as React from 'react';
import { CanvasWidget} from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget} from "../helpers/DemoCanvasWidget";

export default function bolierPlate() {
    engine.setModel(model);
    return (
        <DemoCanvasWidget>
            <CanvasWidget engine={engine} />
        </DemoCanvasWidget>
    );
}