import React from 'react';

import StatCards from "../statCards/statCards";

export default function Home(){
    return(
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards 
                        icon="nc-icon nc-globe"
                        iconStyle="text-warning"

                        title="Capacity"
                        description="150Gb"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-money-coins"
                        iconStyle="text-success"

                        title="Revenue"
                        description="$ 1,345"

                        footer="Last day"
                        iconFooter="fa fa-calendar-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-vector"
                        iconStyle="text-danger"

                        title="Errors"
                        description="23"

                        footer="In the last hour"
                        iconFooter="fa fa-clock-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-favourite-28"
                        iconStyle="text-primary"

                        title="Followers"
                        description="+45k"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards 
                        icon="nc-icon nc-globe"
                        iconStyle="text-warning"

                        title="Capacity"
                        description="150Gb"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-money-coins"
                        iconStyle="text-success"

                        title="Revenue"
                        description="$ 1,345"

                        footer="Last day"
                        iconFooter="fa fa-calendar-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-vector"
                        iconStyle="text-danger"

                        title="Errors"
                        description="23"

                        footer="In the last hour"
                        iconFooter="fa fa-clock-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-favourite-28"
                        iconStyle="text-primary"

                        title="Followers"
                        description="+45k"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards 
                        icon="nc-icon nc-globe"
                        iconStyle="text-warning"

                        title="Capacity"
                        description="150Gb"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-money-coins"
                        iconStyle="text-success"

                        title="Revenue"
                        description="$ 1,345"

                        footer="Last day"
                        iconFooter="fa fa-calendar-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-vector"
                        iconStyle="text-danger"

                        title="Errors"
                        description="23"

                        footer="In the last hour"
                        iconFooter="fa fa-clock-o"
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <StatCards
                        icon="nc-icon nc-favourite-28"
                        iconStyle="text-primary"

                        title="Followers"
                        description="+45k"

                        footer="Update Now"
                        iconFooter="fa fa-refresh"
                    />
                </div>
            </div>
        </div>
    );
}