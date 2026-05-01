import { Puff } from "react-loader-spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="text-center mx-auto">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
