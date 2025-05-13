import { useState } from "react";

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
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Kalkulator BMI</h1>

      <input
        type="number"
        placeholder="Berat (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full mb-4 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Tinggi (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={calculateBMI}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Hitung
      </button>

      {bmi && (
        <div className="mt-6 text-gray-700">
          <p className="text-lg">
            <strong>BMI:</strong> {bmi}
          </p>
          <p className="text-lg">
            <strong>Kategori:</strong> {category}
          </p>
        </div>
      )}
      {!bmi && category && (
        <p className="mt-6 text-red-500 font-semibold">{category}</p>
      )}
    </div>
  );
}

export default App;
