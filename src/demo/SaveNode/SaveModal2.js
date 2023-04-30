import {Container, Typography, Button,
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Autocomplete, TextField } from "@mui/material";
import {Box} from "@mui/system";
import React, { useEffect, useState } from "react";
import '../../App.css';
import styled from "@emotion/styled";
import axios from "axios";
import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    GridValueGetterParams,
    GridValueSetterParams,
} from '@mui/x-data-grid';

export const ButtonBox = styled.div`
    margin-top: 15px;
`;

const options = ['INSERT', 'SAVE'];

const columns: GridColDef[] = [
    {
        field: 'tableFieldName',
        headerName: '테이블 필드명',
        width: 220,
        editable: false
    },
    {
        field: 'type',
        headerName: '유형',
        editable: true
    },
    {
        field: 'mappingField',
        headerName: '매핑 필드',
        width: 220,
        editable: true,
    },
    {
        field: 'defaultValue',
        headerName: '기본값',
        width: 200,
        editable: true,
    },
    {
        field: 'control',
        headerName: '관리',
        width: 180,
        editable: true,
    },
];

const SaveModal2 = ({ dataSet }) => {
    const [curType, setCurType] = useState('INSERT');
    const [table, setTable] = useState([]);

    const handleClickSubmit = () => {
        alert('저장');
        console.log(curType)
        props.setOnModal(false);
    }

    const handleType = (event: React.ChangeEvent, value: string) => {
        setCurType(value);
        console.log(curType);
    }

    const handleTable = (event: React.ChangeEvent, value: string) => {
        console.log('handle table');
    }

    useEffect(() => {
        axios
            .get(
                "http://localhost:5000/test"
            )
            .then((response) => {
                setTable(response.data);
                console.log(table);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <Typography>유형</Typography>
            <Autocomplete
                onChange={(event, value) => handleType(event, value)}
                id="type"
                //getOptionLabel={(options) => `${options}`}
                options={options}
                noOptionsText={"No Available Type"}
                renderOption={(props, options) => (
                    <Box component="li" {...props} key={options} value={curType}>
                        {options}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params}/>}
            />

            <Typography>테이블</Typography>
            <Autocomplete
                onChange={(event, value) => handleTable(event, value)}
                id="table"
                getOptionLabel={(table) => `${table}`}
                options={table}
                noOptionsText={"No Available Table"}
                renderOption={(props, options) => (
                    <Box component="li" {...props} value={table}>
                        {}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params}/>}
            />
            <div style={{
                height: 300,
                width: '100%' ,
                marginTop: '10px'
            }}>
                <DataGrid rows={rows2} columns={columns} />
            </div>
            <ButtonBox style={{
                marginTop: '10px'
            }}>
                <Button onClick={handleClickSubmit} variant="contained">저장</Button>
                <Button onClick={() => props.setOnModal(false)} variant="text">닫기</Button>
            </ButtonBox>
        </Container>
    );
};

const rows2: GridRowsProp = [
    {
        id: 1,
        tableFieldName: '테스트필드',
        type: '테스트',
        mappingField: '테스트필드',
        defaultValue: '테스트',
        control: '테스트'
    }
];

export default SaveModal2;
