import Head from "next/head";
import styles from "../styles/Layout.module.css";
export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="keyword" />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events",
  description: "Find the latest events",
  keywords: "events,college",
};
