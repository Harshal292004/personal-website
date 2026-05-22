"use client";
import React, { useState } from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";
import { X, Maximize2, Minimize2, Download } from "lucide-react";
import { space_mono } from "@/lib/fonts";
import { handleDownloadResume } from "@/lib/handleResumeDownload";

interface NewPdfViewerProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
}

export const NewPdfViewer = ({
  modalIsOpen,
  onRequestClose,
}: NewPdfViewerProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const resume = "/harshal_malani.pdf";

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="overflow-hidden"
      className={`fixed z-50 p-2 sm:p-4 transition-all duration-300 ${
        isFullScreen ? "inset-0" : "inset-0 flex items-center justify-center"
      }`}
      overlayClassName="fixed inset-0 bg-[#161819] dark:bg-black backdrop-blur-md z-40 transition-opacity duration-300"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full bg-[#f9f5ee] dark:bg-[#161819] border border-[#ebd9c8] dark:border-zinc-800 rounded-2xl shadow-[0_20px_50px_-20px_rgba(235,217,200,0.4)] dark:shadow-none overflow-hidden flex flex-col ${
          isFullScreen
            ? "fixed inset-4 h-[calc(100vh-2rem)] max-w-none"
            : "h-[85vh] sm:h-[80vh] sm:max-w-3xl lg:max-w-4xl mx-auto"
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-5 py-3.5 border-b border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-[#161819] backdrop-blur-sm z-10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestClose}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-102"
            >
              <X size={14} />
              <span>Close</span>
            </button>
            <span
              className={`${space_mono.className} hidden sm:inline-block text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest`}
            >
              harshal_resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Fullscreen */}
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-2 rounded-xl border border-[#ebd9c8] dark:border-zinc-800 bg-[#f9f5ee] dark:bg-zinc-900 hover:bg-[#f3ece0] dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-300 cursor-pointer"
              title={isFullScreen ? "Minimize" : "Maximize"}
            >
              {isFullScreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownloadResume}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-102 shadow-sm"
            >
              <Download size={14} />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* PDF Document Container */}
        <div className="flex-1 w-full h-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 p-2 sm:p-4">
          <iframe
            src={`${resume}#view=FitH`}
            className="w-full h-full rounded-lg border border-[#ebd9c8]/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900 shadow-inner"
            title="Resume PDF"
          />
        </div>
      </motion.div>
    </ReactModal>
  );
};
