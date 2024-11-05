"use client";
import CVDownloadButton from "../components/CVDownload";

function page() {
  return (
    <div className="h-screen text-center p-8">
      <h1 className="my-8">Welcome to my website!</h1>
      <p className="mb-4">You can get my resume</p>
      <CVDownloadButton
        fileName="frontendEngineer.pdf"
        cvUrl="https://drive.google.com/file/d/1SzYgSJ24bZ4zU_ccBtejXO7ejd4CIt2U/view?usp=sharing"
      />
    </div>
  );
}

export default page;
