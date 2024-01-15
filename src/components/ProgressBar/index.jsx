export const ProgressBar = ({ progress }) => {
    return (
      <div className='h-10 w-full bg-gray-300'>
        <div
          style={{ width: `${progress}%`}}
          className="h-full bg-green-500 transition-all duration-500 ease-linear">
        </div>
        <div style={{ width: `${progress}%`, position: 'absolute', top: '20.5%', left: '-18%', transform: 'translateY(-50%)'  }}>
         <span>{progress}%</span>
       </div>
      </div>
    );
  };