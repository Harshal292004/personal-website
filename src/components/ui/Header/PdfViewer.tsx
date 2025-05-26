import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import ReactModal from "react-modal";
import { X, Maximize2, Minimize2, Download } from "lucide-react";
import { useState } from "react";

const PdfViewer = ({
  modalIsOpen,
  onRequestClose,
}: {
  modalIsOpen: boolean;
  onRequestClose: () => void;
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const resume = "/harshal_malani.pdf";
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Harshal_Malani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      className={twMerge(
        "fixed z-50 p-2 sm:p-4 transition-all duration-300",
        isFullScreen ? "inset-0" : "inset-0 flex items-center justify-center",
      )}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={twMerge(
          "w-full bg-white border-black  shadow-[12px_12px_0px_0px_#000000] overflow-hidden ",
          "dark:bg-gray-800 dark:text-white bg-white text-black",
          isFullScreen
            ? "fixed inset-3 h-full max-w-none"
            : "h-[90vh] sm:h-[80vh] sm:max-w-3xl lg:max-w-5xl mx-auto ",
        )}
      >
        {/* Modal Header */}
        <div
          className={twMerge(
            "flex justify-between items-center p-4 border-b-2 border-black ",
            "dark:bg-yellow-300 text-black bg-emerald-300",
          )}
        >
          <div className="flex items-center gap-3">
            <motion.button
              onClick={onRequestClose}
              className={twMerge(
                "px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] font-bold flex items-center gap-2 transition-all duration-200",
                "dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black",
                "bg-emerald-400 hover:bg-emerald-300 ",
              )}
              whileHover={{
                scale: 1.05,

                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <X size={16} />
              Close
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white hover:bg-gray-100 text-black font-bold transition-all duration-200"
              whileHover={{
                scale: 1.05,

                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              className={twMerge(
                "px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] font-bold flex items-center gap-2 transition-all duration-200",
                "dark:bg-yellow-400 dark:hover:bg-yellow-300 text-black",
                "bg-emerald-400 hover:bg-emerald-300 ",
              )}
              whileHover={{
                scale: 1.05,

                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Download size={16} />
              Download
            </motion.button>
          </div>
        </div>

        <div className="h-full overflow-hidden">
          <iframe
            src={resume}
            className="w-full h-full"
            style={{ border: "none" }}
            title="Resume PDF"
          />
        </div>
      </motion.div>
    </ReactModal>
  );
};

export { PdfViewer };
