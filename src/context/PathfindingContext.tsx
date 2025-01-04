import { createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

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

  export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, setGrid] = useState<GridType>(
      createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
    );
    const[isGraphVisualized, isGraphVisualized] = useState<boolean>(false);

    return (
      <PathfindingContext.Provider
        value={{
          algorithm,
          setAlgorithm,
          maze,
          setMaze,
          grid,
          setGrid,
          isGraphVisualized,
          setIsGraphVisualized,
        }}
      >
        {children}
      </PathfindingContext.Provider>
    );
  };