import { IoMdInformationCircleOutline } from "react-icons/io";
import InputField from "../../InputField/InputField";
import SelectInputField from "../../SelectInputField/SelectInputField";
import FileUploadFiled from "../../FileUploadFiled/FileUploadFiled";

const PersonalInformation = () => {
  return (
    <div className="bg-white border shadow-sm rounded-[5px] mb-[30px]">
      <div className="bg-[#e9edf4] px-[20px] py-[16px] rounded-t-[5px] flex items-center gap-[10px] mb-[20px]">
        <div className="bg-white p-[5px] rounded-[5px]">
          <IoMdInformationCircleOutline className="text-[#202C4B] text-[14px]" />
        </div>
        <h2 className="text-[#202C4B] font-semibold text-[18px]">
          Personal Information
        </h2>
      </div>
      {/*  */}
      <div className="px-[20px]">
        <FileUploadFiled />
      </div>

      {/*  */}
      <div className="p-[20px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        <SelectInputField
          title={"Academic Year"}
          options={[
            { id: 1, value: "2030" },
            { id: 1, value: "2029" },
            { id: 1, value: "2028" },
            { id: 1, value: "2027" },
            { id: 1, value: "2026" },
            { id: 1, value: "2025" },
            { id: 2, value: "2024" },
          ]}
        />
        <InputField title={"Admission Number"} />
        <InputField title={"Admission Date"} type={"date"} />
        <InputField title={"First Name"} />
        <InputField title={"Last Name"} />
        <SelectInputField
          title={"Section"}
          options={[
            { id: 1, value: "Maktab" },
            { id: 2, value: "Najera" },
            { id: 2, value: "Hifz" },
            { id: 2, value: "Kitab" },
          ]}
        />

        <SelectInputField
          title={"Class"}
          options={[
            { id: 1, value: "Class 1" },
            { id: 1, value: "Class 2" },
            { id: 1, value: "Class 3" },
            { id: 1, value: "Class 4" },
            { id: 1, value: "Class 5" },
          ]}
        />

        <SelectInputField
          title={"Class Group"}
          options={[
            { id: 1, value: "A" },
            { id: 1, value: "B" },
            { id: 1, value: "C" },
            { id: 1, value: "D" },
          ]}
        />
        <InputField title={"Roll Number"} />
        <SelectInputField
          title={"Gender"}
          options={[
            { id: 1, value: "Male" },
            { id: 2, value: "Female" },
          ]}
        />
        <InputField title={"Date of Birth"} />
        <SelectInputField
          title={"Blood Group"}
          options={[
            { id: 1, value: "A+" },
            { id: 2, value: "A−" },
            { id: 3, value: "B+" },
            { id: 4, value: "B−" },
            { id: 5, value: "AB+" },
            { id: 6, value: "AB−" },
            { id: 7, value: "O+" },
            { id: 8, value: "O−" },
          ]}
        />
        {/* <InputField title={"Primary Contact Number"} /> */}
        <SelectInputField
          title={"Student Type"}
          options={[
            { id: 1, value: "New" },
            { id: 1, value: "Old" },
          ]}
        />
        <SelectInputField
          title={"Status"}
          options={[
            { id: 1, value: "Residential" },
            { id: 2, value: "Non-resident" },
          ]}
        />
        <InputField title={"Admission Fees"} />
        <InputField title={"Food Fees"} />
        <InputField title={"Monthly Fees"} />
        <InputField title={"Others Fees"} />
      </div>

      {/* <div className="px-[20px] grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
    
      </div> */}
    </div>
  );
};

export default PersonalInformation;
