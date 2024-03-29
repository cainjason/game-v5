import Body from "./components/Body";
import Comment from "./components/Comment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Navbar />
      <Body />
      <Comment />
      <Footer />
    </main>
  );
}
