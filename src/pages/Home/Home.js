import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}