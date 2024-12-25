import { createContext } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";

interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
  }

  export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);