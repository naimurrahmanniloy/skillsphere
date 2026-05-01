import {
  ShieldCheck,
  Infinity,
  MessageSquare,
  Download,
  Bookmark,
  Timer,
} from "lucide-react";

const PriceCard = ({ currentData }) => {
  const features = [
    { icon: <ShieldCheck size={18} />, text: "Certificate of Completion" },
    { icon: <Infinity size={18} />, text: "Lifetime access to assets" },
    { icon: <MessageSquare size={18} />, text: "Private Discord community" },
    { icon: <Download size={18} />, text: "50+ Source Figma Files" },
  ];
  return (
    <div>
      <div className="w-full max-w-100 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        {/* Pricing Header */}
        <div className="mb-8">
          <span className="text-gray-400 text-sm font-medium block mb-2">
            Full Access Course
          </span>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-[#1A1B22] text-5xl font-bold">
              {currentData.price}
            </span>
            <span className="text-gray-400 text-xl line-through decoration-2">
              $299.00
            </span>
          </div>

          {/* Discount Badge */}
          <div className="flex items-center gap-2 text-[#008542] font-bold text-[13px] tracking-tight">
            <Timer size={16} strokeWidth={3} />
            <span>50% Early-bird discount ends in 2 days</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mb-10">
          <button className="w-full bg-[#0052D4] hover:bg-[#0041A8] text-white font-bold py-5 rounded-full transition-all duration-200 text-lg shadow-lg shadow-blue-200 active:scale-[0.98]">
            Enroll Now
          </button>

          <button className="w-full flex items-center justify-center gap-2 text-[#0052D4] font-bold py-2 hover:opacity-70 transition-opacity">
            <Bookmark size={20} fill="currentColor" />
            <span>Save for Later</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-50 w-full mb-8" />

        {/* Features List */}
        <div>
          <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-6">
            This course includes:
          </h4>
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4 text-[#1A1B22] font-semibold text-[15px]"
              >
                <span className="text-[#0052D4]">{feature.icon}</span>
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
