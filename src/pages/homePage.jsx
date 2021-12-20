import Header from "../component/Header";
import style from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <section>
        <h1 className={style.h1}>Change Background</h1>
      </section>
    </>
  );
}

export default HomePage;
