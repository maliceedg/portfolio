export const HOME_INTRO_STORAGE_KEY = "portfolio-home-intro-seen";

export function getHomeIntroSeen(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(HOME_INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setHomeIntroSeen(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(HOME_INTRO_STORAGE_KEY, "1");
  } catch {
    // ignore quota / private mode
  }
}
