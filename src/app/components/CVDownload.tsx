'use client'

import React from 'react';
import { Download } from 'lucide-react';

interface CVDownloadButtonProps {
  cvUrl: string;
  fileName?: string;
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({ cvUrl, fileName = 'my_cv.pdf' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Download className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
      Download CV
    </button>
  );
};

export default CVDownloadButton;