import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function EventsPage({ events }) {
  console.log(events.length);
  return (
    <Layout>
      <h1>Events</h1>

      {Object.keys(events).length === 0 && <h3>No events to show!</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
  };
}
