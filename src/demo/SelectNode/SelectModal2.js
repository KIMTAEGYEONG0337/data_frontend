import {Container, TextField, Typography, Button, TextareaAutosize} from "@mui/material";
import {Box} from "@mui/system";
import React, {useState} from "react";
import {makeStyles} from '@mui/styles';
import GetColumnInfo from './GetColumnInfo';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#000',
        padding: '1rem',
        width: '410px',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    textarea: {
        backgroundColor: '#000',
        color: '#fff',
        border: '1px solid #ff0',
        resize: 'none',
        marginBottom: '1rem',
    },
    saveButton: {
        position: 'absolute',
        bottom: '1rem',
        right: '1.8rem',
    }
});

const SelectModal2 = ({flowAttrInfo, onFlowAttrInfoChange}) => {
    const classes = useStyles();
    const [attr, setAttr] = useState([]);

    const handleSave = () => {
        alert("save");
        flowAttrInfo.sql = attr;
        flowAttrInfo.column_info = GetColumnInfo(attr);
        const updatedFlowAttrInfo = {...flowAttrInfo};
        onFlowAttrInfoChange(updatedFlowAttrInfo);
        // progWorkFlowMng.flowAttr.sql = attr
        // progWorkFlowMng.flowDesc = attr
        // progWorkFlowMng.flowAttr.column_info =GetColumnInfo(attr);
        console.log("submit");
    };

    return (
        <div>
            <Container>
                <h3>SQL 쿼리 관리</h3>
                <Box className={classes.container}>
                    <TextareaAutosize
                        className={classes.textarea}
                        value={attr}
                        // defaultValue={progWorkFlowMng.flowAttr.sql}
                        defaultValue={flowAttrInfo.sql}
                        onChange={(e) => setAttr(e.target.value)}
                        rowsMin={5}
                        placeholder="여기에 입력하세요."
                    />
                </Box>
                <br/>
                <div>
                    <Button onClick={handleSave} variant="contained" className={classes.saveButton}>확인</Button>
                </div>
            </Container>
        </div>
    );
};

export default SelectModal2;
