import React, {FC, useState} from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import {SaveNode} from "./SaveNode";

import {Container, Button, IconButton, Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import ModalPortal from "../MPodal/ModalPortal";
import SaveModal from "./SaveModal";
import SaveModal2 from "./SaveModal2";
import * as S from "../../adstyled";
import "../../styles.css";

export interface SaveNodeWidgetProps {
    node: SaveNode;
    engine: DiagramEngine;
}

const SaveNodeWidget : FC<SaveNodeWidgetProps> = ({engine, node}) => {

    const [modalOpened, setModalOpened] = useState(false);

    node.refresh();

    const handleOpen = () => {
        setModalOpened(true);
    };

    const handleClose = () => {
        setModalOpened(false);
    };

    return (
        <div className="save">
            <S.Widget>
                <S.InPort
                    port={node.inPort}
                    engine={engine}
                    style={{ left: -4, top: "50%" }}
                />
                <Container>
                    <Typography>SAVE</Typography>
                    <IconButton onClick={handleOpen}><SettingsIcon /></IconButton>
                    {modalOpened && (
                        <ModalPortal closePortal={handleClose} flag={"save"}>
                            <SaveModal2 dataSet={node.dataSet}/>
                        </ModalPortal>
                    )}
                </Container>
            </S.Widget>
            <div id="save-modal"></div>
        </div>
    );
}

export default SaveNodeWidget;