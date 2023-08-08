import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Chart } from 'primereact/chart';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {

    const  navigate = useNavigate();

    const doughnutData = {
        labels: ['Paid', 'Pending',],
        datasets: [
            {
                data: [300, 50,],
                backgroundColor: ['#112FF5', '#F51120'],
                hoverBackgroundColor: ['#edb575', '#6fc0dd']
            }
        ]
    };

    return (
        <>
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box sales" onClick={() => {navigate("/SalesAgents")}} style={{ backgroundColor: "#BC44BC" }}>
                        <span className="overview-title" style={{ color: "white" }}>Sales Agent</span>
                        <div className='overview-numbers' style={{ color: "white" }}>30</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box views" onClick={() => {navigate("/Clients")}}style={{ backgroundColor: "green" }}>
                        <span className="overview-title" style={{ color: "white" }}>Clients</span>
                        <div className='overview-numbers' style={{ color: "white" }}>25</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box users"onClick={() => {navigate("/Stock")}} style={{ backgroundColor: "#FCBB04" }}>
                        <span className="overview-title" style={{ color: "white" }}>Stock</span>
                        <div className='overview-numbers' style={{ color: "white" }}>15</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box checkin"onClick={() => {navigate("/Payments")}} style={{ backgroundColor: "blue" }}>
                        <span className="overview-title" style={{ color: "white" }}>Payments</span>
                        <div className='overview-numbers' style={{ color: "white" }}> 20</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid p-fluid">
            <div className="col-12 lg:col-6">
                 <h5>Recent Activities</h5>
                <div style={{ widtth: "50" }}>
                    <DataTable paginator rows={5} className="p-datatable-products">
                        <Column field="id" header="ID"></Column>
                        <Column field="activity" header="Activity"></Column>
                        <Column field="date" header="Date"></Column>
                    </DataTable>
                </div>

            <h5>Leaderboard</h5>
            <div className="card">
                <DataTable paginator rows={5} >
                <Column field="no" header="No."></Column>
                <Column field="name" header="Name"></Column>
                <Column field="percent" header="Sales Percentage"></Column>
                </DataTable>
            </div>
            </div>
            
            <h5>Payment Statistics</h5>
            <div className="card" style={{ marginTop: "5%"}}>
                <div className="flex justify-content-center">
                    <Chart style={{ position: 'relative', width: '700%' }} type="doughnut" data={doughnutData} />
                </div>
            </div>
        </div>
        </>
    );
};

export default AdminDashboard;
