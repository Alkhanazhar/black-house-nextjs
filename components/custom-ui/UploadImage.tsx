import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

interface imageUploadWidgetProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const UploadImage: React.FC<imageUploadWidgetProps> = ({
  value,
  onChange,
  onRemove,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <>
      <div className="mb-4 flex gap-4 items-center flex-wrap ">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-1 text-white"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="gjkb1b4a" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-gray-600 ">
              <Plus />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
export default UploadImage;
