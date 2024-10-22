// Dependencies: npm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

export default function Button48() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      console.log("File selected:", file);
    }
  }, []);

  const handleRemove = useCallback(() => {
    setFileName(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return (
    <div>
      <div className="inline-flex items-center space-x-2 rtl:space-x-reverse">
        <div
          className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-input"
          role="img"
          aria-label={previewUrl ? "Preview of uploaded image" : "Default user avatar"}
        >
          {previewUrl ? (
            <Image
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={32}
              height={32}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound className="opacity-60" size={16} strokeWidth={2} />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button onClick={handleButtonClick} aria-haspopup="dialog">
            {fileName ? "Change image" : "Upload image"}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            aria-label="Upload image file"
          />
        </div>
      </div>
      {fileName && (
        <div className="mt-2 inline-flex gap-2 text-xs">
          <p className="truncate text-muted-foreground" aria-live="polite">
            {fileName}
          </p>{" "}
          <button
            onClick={handleRemove}
            className="font-medium text-red-500 hover:underline"
            aria-label={`Remove ${fileName}`}
          >
            Remove
          </button>
        </div>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  );
}