import UserProfileCard from "@/components/user-profile-card";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/abstract-gradient-dark-blue-purple.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main content */}
      <div className="relative z-10">
        <UserProfileCard />
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2">
          <p className="text-white/80 text-sm">
            Designed and Developed with ❤️ by{" "}
            <a
              href="https://www.youtube.com/@diecastbydollar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white underline-offset-4 hover:underline transition-all duration-300"
            >
              Dollar Gill
            </a>
          </p>
        </div>
      </div>
    </div>

  );
}
