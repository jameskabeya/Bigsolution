import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Siderbar from './Sidebar.jsx'
import Containercharts from './Containercharts.jsx'
import { createBrowserRouter,Outlet , RouterProvider } from "react-router-dom"
import PayrollList from './PayrollList.jsx'
import Editproject from './Editproject.jsx'
import PresenceList from './PresenceList.jsx'
// import ListMoney from './ListMoney.jsx'
import Checklist from './Checklist.jsx'
import PayrollCalculator from './PayrollCalculator.jsx'
import SalaryPayment from './SalaryPayment.jsx'
import HumanResources from './HumanResources.jsx'
import EmploymentContract from './EmploymentContract.jsx'
import ContractType from './ContractType.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Siderbar /><Outlet /></div>,
    children: [
      {
        path: "/Charts",
        element: <Containercharts />,
      },
      {
        path: "/Payworker",
        element: <PayrollList />,
      },
      {
        path: "/EditUser",
        element: <Editproject />
      },
      {
        path: "/Listpresent",
        element: <PresenceList />
      },
      {
        path: "/CheckingList",
        element: <Checklist />
      },
      {
        path: "/calculsalary",
        element: <PayrollCalculator />
      },
      {
        path: "/SalaryPayment",
        element: <SalaryPayment />
      },
      {
        path: "/HumanResources",
        element: <HumanResources />
      },
      {
        path: "/EmploymentContract",
        element: <EmploymentContract />
      },
      {
        path: "/ContractType",
        element: <ContractType />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
