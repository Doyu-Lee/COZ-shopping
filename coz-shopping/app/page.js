"use client";

import { useGetProductQuery, useGetProductByCountQuery } from "./redux/productApi";

export default function Home() {

  // const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const { isLoading, isFetching, data, error } = useGetProductByCountQuery(4);
// console.log(data)
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={user.image_url}
                alt={user.title}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.type}</h3>
              <h3>{user.title}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
