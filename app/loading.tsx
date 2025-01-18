import LoadingSpinner from "./components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="w-full grow flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
