import Nav from "@/app/ui/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
