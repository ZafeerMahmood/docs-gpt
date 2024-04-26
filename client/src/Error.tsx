import { FallbackProps } from "react-error-boundary";

const ErrorPage = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="min-h-screen flex flex-col gap-10 max-w-2xl mx-auto items-center justify-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center">
        Oh no, something went wrong... maybe refresh?
      </h1>
      <button className="btn btn-primary" onClick={resetErrorBoundary}>
        Refresh?
      </button>
    </div>
  );
};
export default ErrorPage;
