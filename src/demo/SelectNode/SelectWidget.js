import React, {FC, useRef, useState, useEffect} from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import {SelectNode} from "./SelectNode";

import {Container, IconButton, Typography} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalPortal from "../MPodal/ModalPortal";
import SelectModal from "./SelectModal";
import SelectModal2 from "./SelectModal2";

import * as S from "../../adstyled";
import "../../styles.css";
import axios from "axios";

export interface SelectNodeWidgetAdvancedProps {
    node: SelectNode;
    engine: DiagramEngine;
}

const SelectNodeWidget : FC<SelectNodeWidgetAdvancedProps> = ({ engine, node}) => {

    const [modalOpened, setModalOpened] = useState(false);
    const [data, setData] = useState([]); // NULL
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [sqlChanged, setSqlChanged] = useState(false);

    const handleOpen = () => {
        setModalOpened(true);
    };

    const handleClose = () => {
        setModalOpened(false);
    };

    const handleFlowAttrInfoChange = (newFlowAttrInfo) => {
        // node.flowAttrInfo = newFlowAttrInfo;
        node.setFlowAttr(newFlowAttrInfo);
        setSqlChanged(!sqlChanged);
    }

    // console.log(node.flowAttrInfo);

    useEffect(() => {
        if(isFirstRender) {
            setIsFirstRender(false);
            console.log("nooo");
            return;
        }
        else {
            node.progWorkFlowMng = {
                ...node.progWorkFlowMng,
                flowAttr: JSON.stringify(node.flowAttrInfo.sql)
            };
            console.log('Sending data:', JSON.stringify(node.progWorkFlowMng, null, 2));
            const fetchData = async () => {
                try {
                    const response = await axios.post("http://localhost:8080/diagram/project/1",
                        node.progWorkFlowMng
                    );
                    console.log("Response data:", response.data);
                    setData(response.data); // 받은 데이터를 상태로 저장
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();
        }
    }, [sqlChanged]);

    return (
        <div className="select">
            <S.Widget>
                <S.OutPort
                    port={node.outPort}
                    engine={engine}
                    style={{ right: -4, top: "50%" }}
                />
                <Container>
                    <Typography>SELECT</Typography>
                    <IconButton onClick={handleOpen}><SettingsIcon /></IconButton>
                    {modalOpened && (
                        <ModalPortal closePortal={handleClose} flag={"select"}>
                            <SelectModal2 flowAttrInfo={node.flowAttrInfo} onFlowAttrInfoChange={handleFlowAttrInfoChange}/>
                        </ModalPortal>
                    )}
                </Container>
            </S.Widget>
            <div id="select-modal"></div>
        </div>
    );
};

export default SelectNodeWidget;
