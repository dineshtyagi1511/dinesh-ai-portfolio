"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full animate-pulse" />

      {/* Bottom glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full animate-pulse" />
    </div>
  );
}