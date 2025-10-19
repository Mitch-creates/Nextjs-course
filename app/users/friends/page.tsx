async function MakePostRequest() {
  // This is how you make a POST request to an internal API route on a server component
  // On a client component, you would use the relative path like "/api/hello"
  const response = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John Doe" }),
  });

  const data = await response.json();
  return { data };
}

export default async function FriendsPage() {
  const { data } = await MakePostRequest();
  return <div>Friends List: {data?.message}</div>;
}
