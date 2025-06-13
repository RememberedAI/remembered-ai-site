'use client';
import { useState } from 'react';

export default function HomePage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResultUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (!image) return;
    setLoading(true);

    // 🔁 Replace this with your API call to D-ID or Replicate later
    await new Promise((r) => setTimeout(r, 2000)); // simulate processing delay
    setResultUrl(preview); // temporarily use same image as "result"

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Remembered.AI</h1>
        <p className="text-lg text-gray-600">
          Upload a photo of a loved one. Our AI brings them back with lifelike animation.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />

        {preview && (
          <div>
            <h3 className="text-md font-medium text-gray-700 mt-4">Preview:</h3>
            <img
              src={preview}
              alt="Preview"
              className="mx-auto max-h-64 rounded-lg border"
            />
          </div>
        )}

        {image && (
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            {loading ? 'Processing...' : 'Generate AI Video'}
          </button>
        )}

        {resultUrl && !loading && (
          <div>
            <h3 className="text-md font-medium text-gray-700 mt-4">AI Result:</h3>
            <img
              src={resultUrl}
              alt="AI result"
              className="mx-auto max-h-64 rounded-lg border mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
