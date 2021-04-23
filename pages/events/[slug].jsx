import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  const router = useRouter();
  return (
    <Layout>
      <h1>{evt.name}</h1>
      <h3>{router.query.slug}</h3>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
