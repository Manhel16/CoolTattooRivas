import Header from "../components/Header";
import "../App.css"
import Footer from "../components/Footer";
import Main from "../components/Main";
import usePageTitle from "../usePageTitle";
import CookieNotification from "../components/CookieNotification";
export default function Inicio() {
usePageTitle('Home');
return (
  <>
    <Header />
    <CookieNotification />
    <Main />
    <Footer />
  </>
);
}