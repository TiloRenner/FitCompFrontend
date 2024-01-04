export const ProgressBar = ({ progress }) => {
    return (
      <div className='h-1 w-full bg-gray-300'>
        <div
          style={{ width: `${progress}%`}}
          className="h-full bg-blue-500 transition-all duration-500 ease-linear">
        </div>
      </div>
    );
  };