import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to RehabTracker</h1>
      <p className="mt-4 text-lg text-center">
        Track your rehabilitation progress with ease and efficiency.
      </p>
      <div className="mt-8">
        <Image
          src="/images/rehab_tracker_logo.png"
          alt="RehabTracker Logo"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
