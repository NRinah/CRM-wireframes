import { Button } from 'primereact/button';
import React, {useState, useRef} from 'react';    
import { confirmPopup } from 'primereact/confirmpopup';
import { Dropdown } from 'primereact/dropdown';
function AddPayment(){

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

        const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Paid', code: 'Paid' },
        { name: 'Pending', code: 'Pending' }
    ];
        return(
    <div class="card">
        <h5>Payment Details</h5>
        <div class="field">
            <label for="paymentid">Payment Id</label>
            <input id="paymentid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field">
            <label for="clientname">Client's Name</label>
            <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field">
            <label for="product">Product Purchased</label>
            <input id="product" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field">
            <label for="quantity">Quantity</label>
            <input id="quantity" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div class="field">
            <label for="amount">Amount</label>
            <input id="amount" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-3">
                            <label htmlFor="status">Status</label>
                            <Dropdown id="status" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
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
export default AddPayment;