// app/components/PdfUploader.js
'use client';

import { useState } from 'react';

export default function PdfUploader() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    const formData = new FormData(e.target);
    const file = formData.get('file');

    if (!file) {
      setError('Please select a file');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/extract-text', {
        method: 'POST',
        body: formData,
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server response was not JSON');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process PDF');
      }

      setResult(data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Failed to process PDF');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Upload PDF
          </label>
          <input
            type="file"
            name="file"
            id="file"
            accept=".pdf"
            className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md
                    hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Processing...' : 'Extract Text'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold mb-2">Results:</h3>
          <div className="space-y-2">
            <p>Number of pages: {result.numberOfPages}</p>
            <div className="prose max-w-none">
              <h4 className="text-sm font-semibold mt-2">Extracted Text:</h4>
              <pre className="whitespace-pre-wrap bg-white p-2 rounded-md text-sm">
                {result.text}
              </pre>
            </div>
            {result.metadata && Object.keys(result.metadata).length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mt-2">Metadata:</h4>
                <pre className="whitespace-pre-wrap bg-white p-2 rounded-md text-sm">
                  {JSON.stringify(result.metadata, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}