import React from 'react'
import DashboardLayout from '../components/layouts/DashbaordLayouts'

const Page = () => {

    const doctorName = "Dr. Sarah Johnson";
    const doctorRole = "Cardiologist";
    return (
        <DashboardLayout userName={doctorName} userRole={doctorRole}>
            <div>Page</div>
        </DashboardLayout>
    )
}

export default Page