import { CanvasEngine } from "@projectstorm/react-canvas-core";
import {
    DefaultPortModel,
    NodeModel,
    NodeModelGenerics,
} from "@projectstorm/react-diagrams";

export class SelectNode extends NodeModel<NodeModelGenerics>{
    dataSet = {
        table : '',
        column : '',
        value : [''],
    }

    progWorkFlowMng = {
        "flowId" : "",
        "progId" : 1,
        "flowSeq" : 0,
        "flowType" : "",
        "flowDesc" : "",
        "crtdDttm" : "",
        "updtDttm" : ""
    }

    flowAttrInfo = {
        "sql" : "",
        "col" : ['dasdas']
    }

    onlineTransIsol = {
        idx : 0,
        acct_desc : '',
        acct_type : '',
        balance : 0,
        device_info : '',
        hhmissff : '',
        in_pay_acc : '',
        in_pay_bcd : '',
        in_pay_name : '',
        inpt_dttm : '',
        out_pay_acc : '',
        out_pay_bcd : '',
        out_pay_name : '',
        tot_amt : 0,
        user_id : '',
        user_no : 0,
        user_type : '',
        yyyymmdd : ''
    }

    outPort = new DefaultPortModel(false, "out");

    constructor(readonly engine: CanvasEngine) {
        super({ type: "select-node" });
        this.addPort(this.outPort);
    }

    setValue(value: string[]) {
        this.dataSet.value = [...value];
        this.engine.repaintCanvas();
    }

    setFlowAttr(attr: string) {
        this.flowAttrInfo.sql = attr;
        this.engine.repaintCanvas();
    }

    serialize() {
        // console.log(this.s_value)
        return {
            ...super.serialize(),
            value: this.dataSet.value
        };
    }
}

export default SelectNode;