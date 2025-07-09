import { useState } from "react";
import clsx from "clsx";
import Input from "../Input";
import DropdownIcon from "../../svg/Dropdown";
import { FORM_LABELS } from "@/constants/appTexts";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  format: string;
}

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  countryOptions?: Country[];
}

const PhoneInput = ({ value, onChange, countryOptions }: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countryOptions?.[0] || {} as Country);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState(value);
  const [placeholder, setPlaceholder] = useState(`${selectedCountry?.dialCode} ${selectedCountry?.format}`);

  const filteredCountries = countryOptions?.filter((country: any) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhone(newValue);
    onChange(newValue); // This will update the form state
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-4" data-testid="phone-dropdown-container">
      <label className="block mb-2 text-sm font-medium text-gray-700 text-left">
       {FORM_LABELS.PHONE_NUMBER}
      </label>
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white relative">
        <div
          className="flex items-center cursor-pointer pr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xl mr-2">{selectedCountry.flag}</span>
          <DropdownIcon/>
        </div>
        <input
          data-testid="phone-input"
          type="text"
          className="ml-2 outline-none w-full"
          placeholder={placeholder}
          value={phone}
          onChange={handlePhoneChange}
        />

        {isOpen && (
          <div className="absolute top-full left-0 w-full z-10 bg-white shadow-md rounded-md mt-1 max-h-64 overflow-auto">
            <Input
              data-testid="phone-search-input"
              type="text"
              className="w-full p-2 border-b border-gray-200 outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
              {filteredCountries?.map((country) => (
                <li
                  data-testid="country-option"
                  key={country.code}
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearch("");
                    setPhone("");
                    setPlaceholder(`${country.dialCode} ${country.format}`);
                  }}
                  className={clsx(
                    "flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100",
                    country.code === selectedCountry.code && "bg-gray-100"
                  )}
                >
                  <span className="text-xl mr-2">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  {country.code === selectedCountry.code && (
                    <span className="text-purple-600 font-bold">✓</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhoneInput;
