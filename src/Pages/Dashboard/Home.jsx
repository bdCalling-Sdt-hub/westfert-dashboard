import React from "react";
import SalesTrackingChart from "../../components/ui/Home/SalesTrackingChart";
import RunningOrdersTable from "../../components/ui/Home/RunningOrdersTable";
import rentMeLogo from "../../assets/navLogo.png";
import UserEngagement from "../../components/ui/Home/UserEngagement";
import GeneralStateSection from "../../components/ui/Home/GeneralStateSection";
import Professionals from "../../components/ui/Home/Professionals";
import TotalQuotesStatistics from "../../components/ui/Home/TotalQuotesStatistics";
import SoldFertilizerStatistics from "../../components/ui/Home/SoldFertiliserStatistics";

const Home = () => {
  const orderSummary = {
    doneByProfessionals: 65,
    doneByFreelancers: 35,
  };

  const isLoading = false;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={rentMeLogo} alt="" />
      </div>
    );
  }

  return (
    <div>
      <GeneralStateSection />
      <div className="md:flex w-full items-center gap-6 mt-4">
        <div className="w-full bg-white border rounded-2xl py-3 flex flex-col justify-center">
          <p className="text-xl font-semibold px-4 py-5">Earning Statistics</p>
          <SalesTrackingChart />
        </div>
      </div>
      <div className="w-full md:flex gap-6">
        <div className="md:w-6/12 my-6 ">
          {" "}
          <TotalQuotesStatistics />
        </div>
        <div className="md:w-6/12 my-6 ">
          <SoldFertilizerStatistics />
        </div>
      </div>
    </div>
  );
};

export default Home;
