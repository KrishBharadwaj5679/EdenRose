import SECTIONS from "./data/sections";

let App = () => {
  return (
    <main
      className="w-full bg-white overflow-x-hidden"
      onContextMenu={(event) => event.preventDefault()}
    >
      {SECTIONS.map((section) => (
        <section key={section.name} className="w-full block">
          <img
            src={section.url}
            alt={section.name}
            className="w-full h-auto block"
            style={{ aspectRatio: section.aspectRatio }}
            loading={section.name === "Hero" ? "eager" : "lazy"}
          />
        </section>
      ))}
    </main>
  );
};

export default App;
