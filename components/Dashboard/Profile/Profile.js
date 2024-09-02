"use client";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import ProfileInfo from "./ProfileInfo";
import useFetch from "@/hooks/useFetch";
import Loading from "@/components/Loading";
import ProfileTabs from "./ProfileTabs";
import ErrorBox from "@/components/ErrorBox";

const Profile = () => {
  const { data, loading, error, refresh } = useFetch("/profile/");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorBox />;
  }

  return (
    <div>
      <Breadcrumb pageTitle="profile" />
      <ProfileInfo data={data} refreshData={refresh} />
      <ProfileTabs data={data} />
    </div>
  );
};

export default Profile;
