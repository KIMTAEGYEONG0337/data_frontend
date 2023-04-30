import React, {FC, useState, useEffect} from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import {FilterNode} from "./FilterNode";

import {Container, Button, IconButton, Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import ModalPortal from "../MPodal/ModalPortal";
import FilterModal from "./FilterModal";
import FilterModal2 from "./FilterModal2";
import GetFilteredData from "./GetFilteredData";
import * as S from "../../adstyled";
import "../../styles.css";

export interface FilterNodeWidgetProps {
    node: FilterNode;
    engine: DiagramEngine;
}

const FilterNodeWidget : FC<FilterNodeWidgetProps> = ({engine, node}) => {

    const initTable = Object.keys(node.dummy[0]);

    const [modalOpened, setModalOpened] = useState(false);
    const [fieldStates, setFieldStates] = useState(null);
    const [tableField, setTableField] = useState(initTable);

    node.refresh();
    // console.log(fieldStates);

    useEffect(() => {
        if(node.dummy) {
            setTableField(Object.keys(node.dummy[0]));
        }
    }, [node.dummy]);

    useEffect(() => {
        if(fieldStates) {
            node.filteredData = GetFilteredData(node.dummy, fieldStates);
            console.log(node.filteredData);
        }
    }, [fieldStates]);

    const handleOpen = () => {
        setModalOpened(true);
    };

    const handleClose = () => {
        setModalOpened(false);
    };

    const handleFieldStatesUpdate = (updatedFieldStates) => {
        setFieldStates(updatedFieldStates);
    };

    return (
        <div className="filter">
            <S.Widget>
                <S.OutPort
                    port={node.outPort}
                    engine={engine}
                    style={{ right: -4, top: "50%" }}
                />
                <S.InPort
                    port={node.inPort}
                    engine={engine}
                    style={{ left: -4, top: "50%" }}
                />
                <Container>
                    <Typography>FILTER</Typography>
                    <IconButton onClick={handleOpen}><SettingsIcon /></IconButton>
                    {modalOpened && (
                        <ModalPortal closePortal={handleClose} flag={"filter"}>
                            <FilterModal2
                                dataSet={node.dataSet}
                                onFieldStatesUpdate={handleFieldStatesUpdate}
                                savedFieldStates = {fieldStates}
                                tableField = {tableField}
                            />
                        </ModalPortal>
                    )}
                </Container>
            </S.Widget>
            <div id="filter-modal"></div>
        </div>
    );
}

export default FilterNodeWidget;