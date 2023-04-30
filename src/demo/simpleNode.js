import React from "react";
import createEngine, {
    DefaultDiagramState, DefaultNodeModel,
    DiagramModel
} from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import SelectNodeFactory from "./SelectNode/SelectNodeFactory";
import FilterNodeFactory from "./FilterNode/FilterNodeFactory";
import SaveNodeFactory from "./SaveNode/SaveNodeFactory"
import {SelectNode} from "./SelectNode/SelectNode";
import {FilterNode} from "./FilterNode/FilterNode";
import SaveNode from "./SaveNode/SaveNode";
import "../styles.css";

export default function simpleNode() {
    var engine = createEngine({registerDefaultDeleteItemsAction: false});
    engine.getNodeFactories().registerFactory(new SelectNodeFactory());
    engine.getNodeFactories().registerFactory(new FilterNodeFactory());
    engine.getNodeFactories().registerFactory(new SaveNodeFactory());
    var model = new DiagramModel();

    var node1 = new DefaultNodeModel( {
        name: 'Node 1',
        color: 'rgb(0, 192, 255)'
    });

    node1.setPosition(100, 100);
    let port1 = node1.addOutPort('Out');

    var node2 = new DefaultNodeModel('Node 2', 'rgb(192, 255, 0)');
    let port2 = node2.addInPort('In');
    node2.setPosition(400, 100);

    var node5 = new SelectNode(engine);
    node5.setPosition(300,200);

    var node6 = new FilterNode(engine);
    node6.setPosition(500,400);

    var node7 = new SaveNode(engine);
    node7.setPosition(700, 200);

    let link1 = port1.link(port2);
    console.log("link1", link1);
    link1.addLabel("Hello World!");

    model.addAll(node1, node2, link1, node5, node6, node7);

    model.registerListener({
        linksUpdated: (event) => {
            event.link.registerListener({
                targetPortChanged: (event) => {
                    console.log('Link Changed');
                }
            })
        }
    });

    engine.setModel(model);

    return (
        // <DemoCanvasWidget>
            <CanvasWidget className="canvas" engine={engine} />
        // </DemoCanvasWidget>
    );
}