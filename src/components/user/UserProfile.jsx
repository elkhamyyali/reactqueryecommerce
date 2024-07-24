import React from "react";
import { useQuery } from "react-query";
import { fetchUserProfile } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

function UserProfile() {
  const { user } = useAuth();

  const userProfileQuery = useQuery(
    ["userProfile", user ? user.id : null],
    () => (user ? fetchUserProfile(user.id) : Promise.resolve(null)),
    {
      enabled: !!user,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: profile, isLoading, error } = userProfileQuery;

  if (!user) return <div className="text-center">User not found</div>;

  if (isLoading) return <div className="text-center">Loading profile...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">
        Error loading profile: {error.response?.data?.message || error.message}
      </div>
    );
  if (!profile) return <div className="text-center">Profile not found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="space-y-4">
        <div>
          <strong className="block text-gray-700">Username:</strong>
          <span>{profile.username}</span>
        </div>
        <div>
          <strong className="block text-gray-700">Email:</strong>
          <span>{profile.email}</span>
        </div>
        <div>
          <strong className="block text-gray-700">Full Name:</strong>
          <span>
            {profile.firstName} {profile.lastName}
          </span>
        </div>
        <div>
          <strong className="block text-gray-700">Phone:</strong>
          <span>{profile.phone}</span>
        </div>
        <div>
          <strong className="block text-gray-700">Address:</strong>
          <span>
            {profile.address.street}, {profile.address.city},{" "}
            {profile.address.state} {profile.address.zipcode}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
