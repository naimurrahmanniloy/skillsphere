"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  return (
    <div className="my-10">
      <Card className="max-w-3xl mx-auto flex flex-col items-center mt-5">
        <Avatar className="h-60 w-60">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-3xl">
            {user?.name[0]}
          </Avatar.Fallback>
        </Avatar>
        <h2 className="text-3xl font-bold">{user?.name}</h2>
        <p className="text-muted text-xl">Email: {user?.email}</p>
        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default MyProfile;
