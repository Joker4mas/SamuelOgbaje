import CVDownloadButton from "../components/CVDownload";

function page() {
  return (
    <div className="h-screen text-center p-8">
      <h1 className="my-8">Welcome to my website!</h1>
      <p className="mb-4">You can get my resume</p>
      <CVDownloadButton
        cvUrl="@FrontendEngineer.pdf"
        fileName="Samuel's_CV.pfd"
      />
    </div>
  );
}

export default page;
