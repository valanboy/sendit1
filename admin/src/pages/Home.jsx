import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { PieChart } from '@mui/x-charts/PieChart';


const Home = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <h1 className="text-[20px] font-semibold">Users</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> 28</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> 217</span>
        </div>

        <div className="flex flex-col items-center justify-center text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
          <div className="flex items-center mt-[20px]">
            <HiArrowSmallUp className="text-[28px] text-green-500" />
            <HiArrowLongDown className="text-[28px] text-red-500" />
          </div>
          <span className="mt-[20px] text-[18px]"> 13</span>
        </div>
      </div>


      <div className="flex items-center justify-between">
<div className="h-[450px] w-[500px] text-[#fff]">
<PieChart
  series={[
    { 
      data: [
        { id: 0, value: 9, label: 'Pending Parcels'},
        { id: 1, value: 16, label: 'Delivered Parcels' },
        { id: 2, value: 3, label: 'Rejected Parcels' },],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>
</div>
<div className="h-[350px] w-[300px] shadow-lg p-[20px]">
<h2 className="flex px-[20px] font-semibold text-[#fff]">Recent Users</h2>
<ol className="flex flex-col justify-end px-[20px] mt-[10px] text-[#d9d9d9]">
  <li>1. Gilbert B.</li>
  <li>2. Valan boy</li>
  <li>3. Testimnoy</li>
</ol>
</div>
      </div>
    </div>
  );
};

export default Home;
