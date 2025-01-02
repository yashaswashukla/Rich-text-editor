import Editor from "@/components/ContentEditor/advanced-editor";
import { useState } from "react";
import parse from "html-react-parser";

export default function App() {
  const [value, setValue] = useState<string | undefined>(undefined);
  console.log(value);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col p-6 border max-w-xl w-full gap-6 rounded-md bg-card">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold"> Novel Example</h1>
            <div>Theme toggle here</div>
          </div>
          <Editor initialValue={value} onChange={setValue} />
        </div>
        <div className="border rounded-md p-6">
          <div className="text-xl font-bold">Content Preview</div>
          <div className="prose prose-lg dark:prose-invert prose-headings:font-title font-default p-6 mt-3 border rounded-md ">
            {parse(`${value}`)}
          </div>
        </div>
      </div>
    </main>
  );
}
