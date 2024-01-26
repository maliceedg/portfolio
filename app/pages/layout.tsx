import Nav from "@/app/ui/nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
}