
function AdminSettings(){
    <div className="col-12 md:col-6">
                <div className="card">
                    <h5>MegaMenu - Horizontal</h5>
                    <MegaMenu model={megamenuItems} />

                    <h5 style={{ marginTop: '1.55em' }}>MegaMenu - Vertical</h5>
                    <MegaMenu model={megamenuItems} orientation="vertical" />
                </div>
            </div>


};
export default AdminSettings;