import Nav from "@/app/ui/nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
}