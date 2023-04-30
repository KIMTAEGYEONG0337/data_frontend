import createEngine, {DefaultNodeModel} from "@projectstorm/react-diagrams";
import * as D from "@projectstorm/react-diagrams";
import * as React from 'react';
import { CanvasWidget} from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget} from "../helpers/DemoCanvasWidget";

export default function simpleFlow() {
    var engine = createEngine();

    //////////////////////////////////
    const state = engine.getStateMachine().getCurrentState();
    if (state instanceof D.DefaultDiagramState) {
        state.dragNewLink.config.allowLooseLinks = false;
    }
    // 연결안되는 선 금지 ///////////////
    //////////////////////////////////

    var model = new D.DiagramModel();

    var node1 = new D.DefaultNodeModel('Node 1', 'rgb(0, 192, 255)');
    var port1 = node1.addOutPort('Out');
    node1.setPosition(300, 100);

    var node2 = new D.DefaultNodeModel('Node 2', 'rgb(192, 255, 0)');
    var port2 = node2.addInPort('In');
    node2.setPosition(500, 100);

    var link1 = port1.link(port2);

    var node3 = new DefaultNodeModel('Node 3', 'rgb(0, 192, 255)');
    node3.addOutPort('Out');
    node3.setPosition(100, 200);

    model.addAll(node1, node2, node3, link1);

    engine.setModel(model);
    return (
        <DemoCanvasWidget>
            <CanvasWidget engine={engine} />
        </DemoCanvasWidget>
    );
}