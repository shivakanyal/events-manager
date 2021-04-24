import { useState } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/Search.module.css";

export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
          placeholder="Search Events."
        />
      </form>
    </div>
  );
}
