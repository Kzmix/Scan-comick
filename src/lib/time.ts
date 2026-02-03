export function timeAgo(dateString: string): string {
  const now = Date.now();
  const past = new Date(dateString).getTime();
  const diff = Math.floor((now - past) / 1000);

  if (diff < 60) return "Baru saja";
  if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`;
  return `${Math.floor(diff / 86400)} hari lalu`;
}