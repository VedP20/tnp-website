import type React from "react";
import type { StaffTNP } from "../../env";

const Staff: React.FC<{
  data: StaffTNP[];
}> = ({ data }) => {
  return <div className="md:flex grid grid-cols-1  md:justify-between pt-4 flex-wrap gap-8">{data.map(staff => <StaffPost {...staff}/>)}</div>;
};

export default Staff;

const StaffPost = (staffInfo: StaffTNP) => {
    return (
        <div className="border bg-[#f9fafb] rounded-lg p-4 flex flex-col justify-center items-center gap-2">
            <img src={"/Testimonials/"+staffInfo.staffPhoto} alt="staffFoto" className="w-52 rounded-xl"/>
            <div className="font-semibold">{staffInfo.StaffName}</div>
            <div>{staffInfo.designation}</div>
            <div className="bg-[#E4E7EC] px-3 py-2 rounded-lg text-sm w-full text-slate-600 text-center">{staffInfo.experties}</div>
        </div>
    )
}