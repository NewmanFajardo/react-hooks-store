import React from 'react'; 

export default function StatCards({ icon, iconStyle, title, description, footer, iconFooter }) {
    let styleIcon = icon + " " + iconStyle;
    return (
    <div className="card card-stats">
        <div className="card-body ">
        <div className="row">
            <div className="col-5 col-md-4">
            <div className="icon-big text-center icon-warning">
                <i className={styleIcon}></i>
            </div>
            </div>
            <div className="col-7 col-md-8">
            <div className="numbers">
                <p className="card-category">{title}</p>
                <p className="card-title">{description}</p>
            </div>
            </div>
        </div>
        </div>
        <div className="card-footer ">
        <hr />
        <div className="stats">
            <i className={iconFooter}></i> {footer}
        </div>
        </div>
    </div>
    );
}