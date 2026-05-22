export const resume = "/harshal_malani.pdf";
export const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Harshal_Malani_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
