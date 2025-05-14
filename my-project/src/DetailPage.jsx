function DetailPage() {
  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Gaya Hidup Sehat
      </h1>
      <img
        src="https://images.unsplash.com/photo-1571019613914-85f342c1d0e9"
        alt="Hidup Sehat"
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 text-lg">
        Hidup sehat adalah kunci utama untuk menjaga kebugaran tubuh dan
        pikiran. Dengan mengatur pola makan seimbang, rutin berolahraga, cukup
        tidur, dan menjaga kesehatan mental, kita dapat meningkatkan kualitas
        hidup. Mulailah dari langkah kecil, seperti minum air putih yang cukup
        dan hindari makanan olahan. Kebiasaan sehat hari ini adalah investasi
        untuk masa depan yang lebih baik.
      </p>
    </div>
  );
}

export default DetailPage;
