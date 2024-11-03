"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";

interface CVDownloadButtonProps {
  cvUrl: string;
  fileName?: string;
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  cvUrl = "./assets/FrontendEngineer.pdf",
  fileName = "FrontendEngineer.pdf",
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      // Log the URL being fetched for debugging
      console.log("Attempting to fetch:", cvUrl);

      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to download file: ${response.status} ${response.statusText}`
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      setError(null);
    } catch (error) {
      console.error("Download failed:", error);
      setError(
        error instanceof Error ? error.message : "Failed to download CV"
      );
    }
  };

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Download className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
        Download CV
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CVDownloadButton;
