"use client"
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import useFetch from "@/hooks/useFetch";
import Loading from "@/components/Loading";
import ProfileTabs from "./ProfileTabs";

const Profile = () => {
  const { data, loading } = useFetch("/profile/");
  console.log(data);
  

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <Breadcrumb pageTitle="profile" />
      <ProfileInfo data={data} />
      <ProfileTabs data={data} />
    </div>
  );
};

export default Profile;
