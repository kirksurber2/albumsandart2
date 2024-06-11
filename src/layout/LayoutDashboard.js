import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import Tabs from '../components/Tabs/Tabs.js'
import '../components/Tabs/Tabs.css'
import {ReactComponent as WorkFlowIcon} from '../images/svg/WorkFlowIcon.svg'
import {ReactComponent as ClientsIcon} from '../images/svg/ClientsIcon.svg'
import {ReactComponent as LeadsIcon} from '../images/svg/LeadsIcon.svg'
import {ReactComponent as SalesAndExpensesIcon } from '../images/svg/SalesAndExpensesIcon.svg'
import {ReactComponent as ToDoIcon} from '../images/svg/ToDoIcon.svg'
import {ReactComponent as DashboardIcon} from '../images/svg/DashboardIcon.svg'


function LayoutDashboard () {

    return (
        <>
            <Tabs>
                <Link to=''>
                    <DashboardIcon width="36px" height="36px" style={{ stroke: '#335c67', fill:'#335c67'}}/>
                    <label>Dashboard</label>
                </Link>
                <Link to='Workflow'>
                    <WorkFlowIcon width="36px" height="36px" style={{ color: '#335c67'}}/>
                    <label>Workflow</label>
                </Link>
                <Link to='Clients'>
                    <ClientsIcon width="36px" className="clientsIcon" height="36px" />
                    <label>Clients</label>
                </Link>
                <Link to='Leads'>
                    <LeadsIcon width="36px" height="36px"/>
                    <label>Leads</label>
                </Link>
                <Link to='SalesAndExpenses'>
                    <SalesAndExpensesIcon width="36px" height="36px"/>
                    <label>Sales and Expense</label>
                </Link>
                <Link to='ToDo'>
                    <ToDoIcon width="36px" height="36px"/>
                    <label>To Do</label>
                </Link>
            </Tabs>
            
            <Outlet/>
        </>
    )
}

export default LayoutDashboard