import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await response.json();

  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
