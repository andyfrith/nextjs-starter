"use client";

import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import useSystemTheme from "@/hooks/useSystemTheme";

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={theme === "light"}
        onValueChange={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <IconSun className={className} />
          ) : (
            <IconMoon className={className} />
          )
        }
      >
        {showLabel && "Theme"}
      </Switch>
    </div>
  );
}
