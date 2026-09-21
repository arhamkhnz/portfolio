import TechStack from "../../tech-stack/tech-stack";

export default function TechStackOverview() {
  return (
    <div>
      <p className="font-medium text-3xl text-red-500 tracking-tight lg:text-4xl">What I Work With...</p>
      <div className="mt-4 h-60">
        <TechStack />
      </div>
    </div>
  );
}
