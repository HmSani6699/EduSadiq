import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const FileUploadField = () => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 text-sm font-medium text-gray-700">
      {/* Upload area */}
      <div className="flex items-center gap-2">
        {/* Upload box with icon */}

        {previewUrl ? (
          <div className=" h-[80px] w-[80px] border-2  rounded-[5px] ">
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full rounded-[5px]"
            />
          </div>
        ) : (
          <div className="border-dotted h-[80px] w-[80px] border-2 text-[#202C4B] border-[#e9edf4] rounded-[5px] flex items-center justify-center">
            <FiUploadCloud className="text-[#202C4B] text-[20px]" />
          </div>
        )}

        {/* Upload button */}
        <div>
          <div className="flex items-center gap-[10px] mb-[10px]">
            {/* Remove button */}

            {previewUrl ? (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="text-[14px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
              >
                Remove
              </button>
            ) : (
              <button
                type="button"
                className="text-[14px] text-[#fff] bg-[#506EE4] py-[6px] px-[15px] rounded-[5px]  border"
                onClick={handleButtonClick}
              >
                Upload
              </button>
            )}
          </div>
          <p className="text-[12px] text-[#515B73]">
            Upload image size 4MB, Format JPG, PNG, SVG
          </p>
        </div>
      </div>

      {/* File input (hidden) */}
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/svg+xml"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUploadField;
