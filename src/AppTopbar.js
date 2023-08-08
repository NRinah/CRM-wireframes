import React from 'react';
const AppTopbar = (props) => {
    return (
        <div className="layout-topbar" style={{backgroundColor:"#F4F4F4"}}>
            {/* <button onClick={() => navigate('/')} style={{}}>
                <img id="layout-topbar-logo" src="assets/layout/images/default-logo
            .png" alt="babylon-layout" />
            </button> */}

            <button className="layout-menu-button p-link" onClick={props.onMenuButtonClick}>
                <i className="pi pi-bars"></i>
            </button>

            <button id="topbar-menu-button" className="p-link" onClick={props.onTopbarMenuButtonClick}>
                <i className="pi pi-ellipsis-v"></i>
            </button>
        </div>
        
    );
};

export default AppTopbar;
