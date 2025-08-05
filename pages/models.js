import ModelCard from "@/components/ModelCard";
import { modelData } from "@/assets/data/dummydata";

const ModelsPage = () => {
  return (
    <section style={{ background: "#000", padding: "60px 20px", minHeight: "100vh" }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "42px",
        marginBottom: "40px",
        fontWeight: "bold",
        color: "#f2ae1c",
        fontFamily: "Poppins, sans-serif"
      }}>
        Models
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {modelData.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </section>
  );
};

export default ModelsPage;
