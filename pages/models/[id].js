import { useRouter } from "next/router";
import { modelData } from "@/assets/data/dummydata";

const ModelDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const model = modelData.find((m) => m.id.toString() === id);

  if (!model) return <p style={{ color: "#fff" }}>Loading...</p>;

  return (
    <div className="model-detail-page">
      <div className="model-container">
        <div className="main-image">
          <img src={model.image} alt={model.name} />
        </div>

        <div className="model-info">
          <h1>{model.name}</h1>
          <p><strong>Height:</strong> {model.height}</p>
          <p><strong>Age:</strong> {model.age}</p>
          <p><strong>City:</strong> {model.city}</p>
        </div>
      </div>

      {model.images && model.images.length > 0 && (
        <>
          <h2 className="gallery-title">More Images</h2>
          <div className="gallery">
            {model.images.map((img, index) => (
              <div className="gallery-image" key={index}>
                <img src={img} alt={`Model image ${index + 2}`} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ModelDetailPage;
