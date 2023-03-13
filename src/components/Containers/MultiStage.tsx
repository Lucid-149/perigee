import React, { useState } from "react";
import IconManager from "../util/IconManager";
export interface Stage {
  name: string;
  component: React.FC;
  next: string | null;
}

interface Props {
  stages: Stage[];
}

const StageSequence: React.FC<Props> = ({ stages }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const currentStage = stages[currentStageIndex];

  const handleNext = () => {
    if (currentStageIndex + 1 < stages.length) {
      setCurrentStageIndex(currentStageIndex + 1);
      setError(null);
    } else {
      setError("You have reached the last stage.");
    }
  };

  const handleBack = () => {
    if (currentStageIndex > 0) {
      setCurrentStageIndex(currentStageIndex - 1);
      setError(null);
    } else {
      setError("You are already at the first stage.");
    }
  };

  const renderErrorMessage = () => {
    if (error) {
      return <div className="error-message">{error}</div>;
    }
    return null;
  };

  return (
    <div className="">
      {React.createElement(currentStage.component)}
      {currentStage !== stages[0] && (
      <button className=" absolute top-0 left-0 backdrop-blur-0 hover:shadow-none border-none hover:-translate-x-2 hover:scale-105 " title="back" onClick={handleBack} disabled={currentStageIndex === 0}>
        <IconManager name={"prev"}/>
      </button>
        )}

        {currentStage !== stages[stages.length - 1] && (
      <button className=" absolute top-0 right-0      backdrop-blur-0 hover:shadow-none border-none hover:translate-x-2 hover:scale-105 " title="next" onClick={handleNext} disabled={currentStageIndex === stages.length - 1}>
        <IconManager name={"next"}/>
      </button>
        )}  
      {renderErrorMessage()}
    </div>
  );
};

export default StageSequence;
