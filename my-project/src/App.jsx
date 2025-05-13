import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // konversi cm ke meter
    if (!w || !h) {
      setBmi(null);
      setCategory("Masukkan angka valid!");
      return;
    }

    const bmiValue = (w / (h * h)).toFixed(1);
    setBmi(bmiValue);

    let cat = "";
    if (bmiValue < 18.5) cat = "Kurus";
    else if (bmiValue < 25) cat = "Normal";
    else if (bmiValue < 30) cat = "Gemuk";
    else cat = "Obesitas";

    setCategory(cat);
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h1>Kalkulator BMI</h1>
      <div>
        <input
          type="number"
          placeholder="Berat (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Tinggi (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI} style={{ marginTop: "10px" }}>
        Hitung
      </button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>BMI:</strong> {bmi}
          </p>
          <p>
            <strong>Kategori:</strong> {category}
          </p>
        </div>
      )}
      {!bmi && category && (
        <p style={{ marginTop: "20px", color: "red" }}>{category}</p>
      )}
    </div>
  );
}

export default App;
