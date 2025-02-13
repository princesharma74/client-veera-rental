import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
