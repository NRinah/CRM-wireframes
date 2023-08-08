import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import RequestStock from './RequestStock';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/Stock.json';

function Stock(){

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const  navigate = useNavigate();


    const basicDialogFooter = <Button type="button" label="Submit" onClick={() => setDisplayBasic(false)} icon="pi pi-check" className="p-button-secondary" />;

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );
    return (
    <><div className='grid'>
            <div className="row">
                <span className="p-input-icon-right">
                    <InputText style={{ width:'550px', marginleft:'100px'}} type="text" placeholder="Search Term" />
                    <Button icon="pi pi-search" style={{ backgroundColor: "#239B47" }} className="mr-2 mb-2"></Button>
                </span>
            </div>
            <Button type="button" label="Add New Stock" icon="pi pi-plus" onClick={() => {navigate("/AddStock")}}style={{ backgroundColor: "#239B47", float: "right" }} />
            <Button type="button" label="Request New Stock" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "#239B47", float: "right" }} />
        </div>
        <Dialog header="Stock Requisition Form" visible={displayBasic} style={{ width: '30vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <RequestStock/>
                    </Dialog>

        <><h5>Stock</h5>
        <DataTable value={data}>
            <Column field="no" header="Stock Id" style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
            <Column field="product" header="Product Name" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
            <Column field="price" header="Cost Price" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="quantity" header="Quantity Available" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="date" header="Update Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="action" header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)}style={{backgroundColor:"#239B47"}}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
        </DataTable>
        <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                            <div className="flex align-items-center justify-content-center">
                                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                { (
                                <span>Are you sure you want to delete <b>{data.product}</b>?</span>
                                )}
                            </div>
                            </Dialog>
        <Button label="Back" className="mr-2 mb-2" onClick={() => {navigate("/AdminDashboard")}} style={{backgroundColor:'#239B47'}}></Button></></>

            );
};
export default Stock;