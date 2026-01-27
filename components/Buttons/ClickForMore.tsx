import { ChevronDown } from "lucide-react"; // shadcn usa lucide

type ButtonProps = {
  onClick?: () => void;
  text: string;
};

export default function ClickForMoreButton({ onClick, text }: ButtonProps) {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 rounded-md border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
      >
        {text}
        <ChevronDown className="h-5 w-5" />
      </button>
    </div>
  );
}
