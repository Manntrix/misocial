
import Head from "next/head"
import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import AttendeesHeader from "../../Components/OrganizerDashboard/ViewAttendees/AttendeesHeader";
import ViewAttendeesTable from "../../Components/OrganizerDashboard/ViewAttendees/ViewAttendeesTable";

export default function viewAttendees() {
    return (
        <div className="view-attendees">
            <Head>
                <title>Create Next App</title>
                <meta name="View Transactions" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AttendeesHeader />
            <ViewAttendeesTable />
        </div>
    )
}

viewAttendees.Layout = DashboardLayout