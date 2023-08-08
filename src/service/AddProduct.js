import { Button } from 'primereact/button';
import React, {useRef} from 'react';    
import { confirmPopup } from 'primereact/confirmpopup';
function AddProduct(){ 
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
    
    const confirm1 = (event) => {
    confirmPopup({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
    });
    }
    return(
<div class="card">
    <h5>Product Details</h5>
    <div class="field">
        <label for="productid">Product Id</label>
        <input id="productid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="productname">Product Name</label>
        <input id="productname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="price">Unit Price</label>
        <input id="price" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="descr">Description</label>
        <input id="descr" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="action">Action</label>
        <input id="action" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Save" style={{backgroundColor:"#239B47"}}></Button>
            </div> 
</div>
);
};
export default AddProduct;