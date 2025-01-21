import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom';

function Dashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header>
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-200"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </Header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <div className="container mx-auto">
                        <Outlet /> 
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
