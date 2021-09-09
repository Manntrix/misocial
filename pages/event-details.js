import EventBanner from '../Components/Events/EventsBanner'
import EventDetailsContents from '../Components/EventDetails/EventDetailsContents'
export default function EventDetails() {
    return (
        <div className="event-details-wr">
            <EventBanner />
            <EventDetailsContents />
        </div>
    )
}