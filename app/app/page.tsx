export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Remembered.AI</h1>
        <p className="text-lg text-gray-600 mb-6">
          Bring your loved ones back to life—digitally. Upload a photo, and our AI will generate
          lifelike videos of your relatives speaking, smiling, and remembering.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
          Upload Photo
        </button>
      </div>
    </div>
  );
}
