import React from "react";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...rest
}) => {
  const isControlled = value !== undefined;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-[10px] font-black uppercase text-slate-500">
          {label}
        </label>
      )}

      <select
        {...rest}
        value={value}
        onChange={onChange}
        aria-readonly={isControlled && !onChange}
        className={`border p-2 rounded-lg text-sm bg-white outline-none
        focus:border-[#0054a6] transition-all ${rest.className || ""}`}
      >
        <option value="">-- Chọn --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
