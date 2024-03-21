import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CollectionForm from "@/components/collections/CollectionForm";


const CreateCategory = () => {
  return (
    <div className="p-10 w-full">
      <h1 className="text-4xl mb-4">Create a Category</h1>
      <Separator className="bg-gray-500 mb-7" />
      <div className="max-w-3xl my-6">
        {/* <label>Category name</label> */}
        <CollectionForm/>
      </div>
    </div>
  );
};

export default CreateCategory;
