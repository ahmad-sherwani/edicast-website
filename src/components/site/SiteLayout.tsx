import { Outlet } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteLayout() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
