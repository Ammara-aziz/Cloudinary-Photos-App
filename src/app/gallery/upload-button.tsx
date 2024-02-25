"use client";
import { MdOutlineFileUpload } from "react-icons/md";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          
          setTimeout(() => {
            console.log("refresh");
            router.refresh();
          },1000)
        }}
        uploadPreset="mx0o3xtr"
      >
        <div className="flex gap-2 items-center">
          <MdOutlineFileUpload className="w-6 h-6" />
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
}
