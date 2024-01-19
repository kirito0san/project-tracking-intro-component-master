import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <main className="App">
      <span></span>
      <article className="article1">
        <Header />
        <div className="flex flex-col md:flex-1 md:justify-center md:items-center  md:flex-row  ">
          <Article />
          <Main />
        </div>
        <Footer />
      </article>
    </main>
  );
}

export default App;
