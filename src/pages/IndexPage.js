import CallToAction from "../components/Call-to-action";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ContactSection from "../components/contacts/ContactSectionContacts1";
import Brands from "./Brands";
import Footer from "./Footer";
import FindUs from "./Find-us";
import "../App.css";

export default function IndexPage() {
  return (
    <>
      <div className="parent">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Hero />
          <Brands />
          <FindUs />
          <CallToAction />
          <ContactSection />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
