import React from "react";
import UserProfile from "../components/user/UserProfile";
import OrderHistory from "../components/user/OrderHistory";

function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Your Profile </h1>{" "}
      <UserProfile />
      <div className="mt-12">
        <OrderHistory />
      </div>{" "}
    </div>
  );
}

export default ProfilePage;
