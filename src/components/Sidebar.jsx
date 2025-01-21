import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross2, RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import wallet from "../assets/images/walletpic.png"

function Sidebar({ open, setOpen }) {

  return (
    <div>
      <>
        <div
          className={`Rwfs {open ? 'translate-x-0' : '-translate-x-full'
            } fixed inset-y-0 left-0 z-50 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:w-auto md:flex-shrink-0`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-6">
              <div className='flex flex-col'>
                <img src={wallet} alt="" className='w-40 h-40'/>
              <span className="text-2xl font-bold text-primary-color">Wallet Web App</span>
              </div>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-200"
                onClick={() => setOpen(false)}
              >
                <RxCross2 className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
             
              <Link to="/dashboard" className="flex items-center gap-2 rounded-lg px-4 py-2 h-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"> <span><RxDashboard className="w-4 h-4" /></span> Dashboard</Link>
              <Link to="/transactions" className="flex items-center gap-2 rounded-lg px-4 py-2 h-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"> <span><GrTransaction className="w-4 h-4" /></span> Transactions</Link>
              <Link to="/reports" className="flex items-center rounded-lg gap-2 px-4 py-2 h-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"> <span><TbReport className="w-4 h-4" /></span> Reports</Link>
              <Link to="/settings" className="flex items-center rounded-lg gap-2 px-4 py-2 h-full text-gray-700 hover:bg-gray-100 transition-colors duration-200"> <span><LuSettings className="w-4 h-4" /></span> Settings</Link>

            </nav>
          </div>
        </div>
        {open && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </>
    </div>
  )
}

export default Sidebar
