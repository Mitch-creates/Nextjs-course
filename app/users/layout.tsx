export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-red-600">
        The user route defined in layout.tsx inside app/users/[userId]/page.tsx
      </h1>
      {children}
    </div>
  );
}
