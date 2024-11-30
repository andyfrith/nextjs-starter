"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton({ minimal = false }: { minimal?: boolean }) {
  const { data, status } = useSession();

  function signOutClickHandler() {
    signOut({ callbackUrl: "/" });
  }

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button
          onClick={signOutClickHandler}
          color="danger"
          variant="ghost"
          aria-label="Sign In"
        >
          <IconBrandGoogle />
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={signOutClickHandler}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button
      onClick={() => signIn("google")}
      color="danger"
      variant="ghost"
      aria-label="Sign In"
    >
      <IconBrandGoogle />
      Sign In
    </Button>
  );
}
