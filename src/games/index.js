import gameBrainGames from './brain-games';
import gameBrainEven from './brain-even';
import gameBrainCalc from './brain-calc';
import gameBrainGcd from './brain-gcd';
import gameBrainBalance from './brain-balance';
import { run as gameEngine } from '..';

export const getDescription = game => game.description;
export const getGenerator = game => game.generate;
export const isGame = game => game.generate && typeof game.generate === 'function';

const runGameOnEngine = engine => game => engine(game);
const withEngine = runGameOnEngine(gameEngine);

export const brainGames = () => withEngine(gameBrainGames);
export const brainEven = () => withEngine(gameBrainEven);
export const brainCalc = () => withEngine(gameBrainCalc);
export const brainGcd = () => withEngine(gameBrainGcd);
export const brainBalance = () => withEngine(gameBrainBalance);
