export const ProgressBar = ({ progress }) => {
    return (
      <div className='h-10 w-full bg-gray-300 relative'>
        <div
          style={{ width: `${progress}%`}}
          className="h-full bg-orange-300 transition-all duration-500 ease-linear">
        </div>
        <div style={{ width: `${Math.floor(progress)}%`, position: 'absolute', top: '50%', left: '0%', transform: 'translateY(-50%)'  }}>
         <span className="text-white text-3xl">{Math.floor(progress)}%</span>
       </div>
      </div>
    );
  };