import Head from "next/head";
import EventsBanner from '../Components/Events/EventsBanner';
import EventsContent from '../Components/Events/EventsContent'

export default function Events() {
    return (
        <div className="events-wrapper">
            <Head>
                <title>Create Next App</title>
                <meta name="events" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <EventsBanner />
            <EventsContent />

        </div>
    )
}