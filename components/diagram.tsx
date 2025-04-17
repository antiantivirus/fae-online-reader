import { ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { saveAs } from "file-saver";
import Download from "./icons/download";

// Extend the ImageProps type
interface DownloadableImageProps extends ImageProps {
  downloadUrl?: string; // Add a custom property for download functionality
}

export default function Diagram({
  downloadUrl,
  ...props
}: DownloadableImageProps) {
  return (
    <div className="diagram">
      <Image {...props} />
      {downloadUrl &&
        <button
          className="flex gap-2 items-center ml-auto mr-0"
          onClick={() => {
            saveAs(downloadUrl); // Use the custom downloadUrl property
          }}
        ><span className="sr-only">Download</span>
          <Download />
        </button>
      }
    </div>
  );
}